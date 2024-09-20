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
 
        datesArray.forEach(element => {
          console.log(element);
          
        });
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
              {availableSlots.map((slot, index) => (
                <Grid item key={index}>
                  <Button
                    variant={selectedTime === slot ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => handleTimeClick(slot)}
                  >
                    {slot}
                  </Button>
                </Grid>
              ))}
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
