import DoctorAppointmentCard from "../../components/doctorAppoinmentCard/DoctorAppoinmentCard";
import PastAppointmentCard from "../../components/pastAppoinmentCard/PastAppoinmentCard";
import { useEffect, useState } from "react";
import "./AppointmentsPage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navBar/NavBar";
import { fetchGraphQL } from "../../api/GraphQl";

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState("scheduled");

  const handleJoinMeeting = (doctorName) => {
    alert(`Joining meeting for ${doctorName}`);
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `query GetPatientByID {
      getPatientByID {
        upcomingAppointments {
          date
          docId {
            firstName
            lastName
          }
        }
      }
    }`;

    const variables = {
      getPatientByIdId: "12346", // Pass the patient ID
    };

    fetchGraphQL(query, variables)
      .then((responseData) => {
        if (responseData.data) {
          setData(responseData.data.getPatientByID.upcomingAppointments);
        } else {
          throw new Error("No data returned from API");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error during API call:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="appointments-container">
      <Sidebar active="Appointments" />
      <div className="main-content">
        <NavBar
          userImageLink="/path-to-user-image.jpg"
          onProfileClick={() => console.log("Profile clicked")}
        />
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
                {data && data.length > 0 ? (
                  data.map((appointment, index) => {
                    const appointmentDate = new Date(appointment.date);
                    return (
                      <DoctorAppointmentCard
                        key={index}
                        doctorName={`Dr. ${appointment.docId.firstName} ${appointment.docId.lastName}`}
                        appointmentDate={appointmentDate.toLocaleDateString()}
                        appointmentTime={appointmentDate.toLocaleTimeString()}
                        onJoinMeeting={() =>
                          handleJoinMeeting(
                            `Dr. ${appointment.docId.firstName} ${appointment.docId.lastName}`
                          )
                        }
                      />
                    );
                  })
                ) : (
                  <p>No upcoming appointments</p>
                )}
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
