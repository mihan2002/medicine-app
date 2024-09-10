
import DoctorAppointmentCard from "../../components/doctorAppoinmentCard/DoctorAppoinmentCard";
import PastAppointmentCard from "../../components/pastAppoinmentCard/PastAppoinmentCard";
import { useState } from "react";
import "./AppointmentsPage.css";

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState("scheduled");

  const handleJoinMeeting = (doctorName) => {
    alert(`Joining meeting for ${doctorName}`);
  };

  return (
    <div className="appointments-container">
     
      <div className="main-content">
        
        <div className="appointments-content">
          <div className="tabs-container">
            <button
              className={`tab ${activeTab === "scheduled" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("scheduled")}
            >
              Scheduled Appointments
            </button>
            <button
              className={`tab ${activeTab === "past" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("past")}
            >
              Past Appointments
            </button>
          </div>
          <div className="appointments-content-inner">
            {activeTab === "scheduled" ? (
              <>
                <h3 className="appointments-title">Scheduled Appointments</h3>

                <DoctorAppointmentCard
                  doctorName="Dr. Sunil Perera"
                  appointmentDate="July 25, 2024"
                  appointmentTime="2:00 PM"
                  onJoinMeeting={() => handleJoinMeeting("Dr. Sunil Perera")}
                />

                <DoctorAppointmentCard
                  doctorName="Dr. John Doe"
                  appointmentDate="August 25, 2024"
                  appointmentTime="2:00 PM"
                  onJoinMeeting={() => handleJoinMeeting("Dr. John Doe")}
                />
              </>
            ) : (
              <>
                <h3 className="appointments-title">Past Appointments</h3>

                <PastAppointmentCard
                  doctorName="Dr. Sunil Perera"
                  appointmentDate="July 25, 2024"
                  appointmentTime="11:00 a.m. - 11:15 a.m."
                  status="Completed"
                />

                <PastAppointmentCard
                  doctorName="Dr. Sunil Perera"
                  appointmentDate="July 25, 2024"
                  appointmentTime="11:00 a.m. - 11:15 a.m."
                  status="Completed"
                />

                <PastAppointmentCard
                  doctorName="Dr. Sunil Perera"
                  appointmentDate="July 25, 2024"
                  appointmentTime="11:00 a.m. - 11:15 a.m."
                  status="Cancelled"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
