import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AppointmentBooking.css";
import { fetchGraphQL } from "../../api/GraphQl";

const AppointmentBooking = () => {
  const { id } = useParams(); // 'id' represents the doctor's ID from the URL params
  const [appointmentDates, setAppointmentDates] = useState([]);
  useEffect(() => {
    try {
      // Define the GraphQL query
      const query = `query Query($getUpcomingAppointmentByIdId: ID!) {
  getUpcomingAppointmentById(id: $getUpcomingAppointmentByIdId) {
    date
    
  }
}
          `;

      const variables = {
        getUpcomingAppointmentByIdId: id, // Pass the patient ID
      };

      fetchGraphQL(query, variables).then((appointments) => {
        const datesArray = appointments.data.getUpcomingAppointmentById;

        setAppointmentDates(datesArray);
        // Append the new dates to the current state using functional update
        console.log(datesArray);
      });
    } catch (error) {
      console.log(error);
    }

    console.log(appointmentDates);
  }, []);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const availableSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
  ];

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // Function to convert time to 24-hour format
  const convertTo24HourFormat = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  const handleBook = async () => {
    if (!selectedDate || !selectedTime) return;

    // Format the date and time for the API
    const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD"); // Format as 'YYYY-MM-DD'
    const formattedTime = convertTo24HourFormat(selectedTime); // Convert time to 24-hour format

    try {
      const response = await axios.post(
        "http://localhost:4000/patients/booking", // Replace with your API URL
        {
          docId: id, // The doctor's ID from the URL
          date: formattedDate,
          time: formattedTime,
        },
        {
          withCredentials: true, // Ensures cookies are sent with the request
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success response
      console.log("Appointment booked successfully:", response.data);
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error(
        "Error booking appointment:",
        error.response?.data || error.message
      );
      alert("Failed to book appointment. Please try again.");
    }
  };

  const checkAvailability = (selectedTime, selectedDate, appointmentDates) => {
    // Format the date into YYYY-MM-DD
    const year = selectedDate.$y;
    const month = String(selectedDate.$M + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
    const day = String(selectedDate.$D).padStart(2, "0");

    // Convert 12-hour time format to 24-hour format
    const [time, modifier] = selectedTime.split(" "); // Split time and AM/PM
    let [hours, minutes] = time.split(":"); // Split hours and minutes

    if (hours === "12") {
      hours = "00"; // Handle the special case for 12 AM
    }

    if (modifier === "PM" && hours !== "12") {
      hours = parseInt(hours, 10) + 12; // Convert PM hours (except for 12 PM)
    }

    // Format the time part into HH:mm:ss.SSS
    const formattedTime = `${String(hours).padStart(2, "0")}:${minutes}:00.000`;

    // Combine date and time into final ISO string
    const isoString = `${year}-${month}-${day}T${formattedTime}+00:00`;

    // Convert both the isoString and the dates to the same format without timezone differences
    const formattedISODate = new Date(isoString).toISOString();

    // Check if the formatted ISO string exists in the dates array using forEach
    let isAvailable = true;
    if (appointmentDates.length !== 0) {
      appointmentDates.forEach((date) => {
        const formattedDateInList = new Date(date.date).toISOString();
        if (formattedDateInList === formattedISODate) {
          console.log("booked");
          isAvailable = false; // Set isAvailable to false if a match is found
        }
      });
    }

    // Return true if the date is available, otherwise false
    return isAvailable;
  };

  return (
    <div className="appointment-booking-container">
      <Typography variant="h4" gutterBottom>
        Book Your Appointment
      </Typography>

      <div className="appointment-booking-section">
        {/* Calendar for selecting dates */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={selectedDate}
            onChange={(newDate) => handleDateChange(newDate)}
            minDate={dayjs()}
            sx={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
            }} // Box shadow for calendar
          />
        </LocalizationProvider>

        {/* Time slots section with box shadow around all slots */}
        <div className="time-slots-container">
          {selectedDate ? (
            <Grid container spacing={2}>
              {availableSlots.map((slot, index) => {
                // Check if the slot is available using the checkAvailability function
                const isAvailable = checkAvailability(
                  slot,
                  selectedDate,
                  appointmentDates
                );
                return (
                  <Grid item key={index}>
                    {isAvailable ? (
                      <Button
                        variant={
                          selectedTime === slot ? "contained" : "outlined"
                        }
                        color="primary"
                        onClick={() => handleTimeClick(slot)}
                      >
                        {slot}
                      </Button>
                    ) : (
                      <Button
                        variant={
                          selectedTime === slot ? "contained" : "outlined"
                        }
                        color="primary"
                        
                        disabled={true}
                      >
                        {slot}
                      </Button>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Typography variant="body1" color="textSecondary">
              Please select a date first
            </Typography>
          )}
        </div>
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={!selectedTime}
        className="confirm-appointment-btn"
        style={{ marginTop: "30px" }}
        onClick={() => handleBook()}
      >
        Confirm Appointment
      </Button>
    </div>
  );
};

export default AppointmentBooking;
