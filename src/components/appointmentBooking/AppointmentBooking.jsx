import  { useState } from 'react';
import './AppointmentBooking.css';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const availableSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM'
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);  // Reset the selected time when a new date is selected
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="appointment-booking-container">
      
      <div className="appointment-booking-section">
        <div className="calendar-section">
          <h4>June 2024</h4>
          <div className="calendar">
            {[...Array(30)].map((_, i) => (
              <button
                key={i}
                className={`calendar-date ${selectedDate === i + 1 ? 'selected' : ''}`}
                onClick={() => handleDateClick(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="time-slots-section">
          {selectedDate ? (
            availableSlots.map((slot, index) => (
              <button
                key={index}
                className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
                onClick={() => handleTimeClick(slot)}
              >
                {slot}
              </button>
            ))
          ) : (
            <div className="select-date-first">Please select a date first</div>
          )}
        </div>
      </div>

      <button className="confirm-appointment-btn" disabled={!selectedTime}>
        Confirm Appointment
      </button>
    </div>
  );
};

export default AppointmentBooking;
