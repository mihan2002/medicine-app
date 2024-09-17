import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./AppointmentBooking.css";

const AppointmentBooking = () => {
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
    setSelectedTime(null); // Reset the selected time when a new date is selected
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
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
          {" "}
          {/* New wrapper with box shadow */}
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
      >
        Confirm Appointment
      </Button>
    </div>
  );
};

export default AppointmentBooking;
