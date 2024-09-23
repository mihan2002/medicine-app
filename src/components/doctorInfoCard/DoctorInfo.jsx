import { useEffect, useState } from "react";
import "./DoctorInfo.css";
import { useParams } from "react-router-dom";
import { fetchGraphQL } from "../../api/GraphQl";

const DoctorInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `query GetDoctorById($getDoctorByIdId: ID!) {
      getDoctorById(id: $getDoctorByIdId) {
        firstName
        lastName
        imageUrl
        dateOfBirth
        gender
        email
        specialization
        contactNumber
        videoVisitHours
        about
        qualifications
        professionalBackground
        languagesSpoken
        professionStartedYear
        reviews {
          user {
            firstName
            lastName
          }
          comment
          createdAt
        }
      }
    }`;
    const variables = {
      getDoctorByIdId: id,
    };

    fetchGraphQL(query, variables)
      .then((responseData) => {
        if (responseData.data) {
          setData(responseData.data.getDoctorById);
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
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No doctor data available</p>;

  return (
    <div className="doctor-info">
      <div className="doctor-header">
        <img src={data.imageUrl} alt={`${data.firstName} ${data.lastName}`} />
        <p>Specialization: {data.specialization}</p>
      </div>

      <div className="doctor-description">
        <h3>About the doctor</h3>
        <p>{data.about}</p>
      </div>

      <div className="doctor-qualifications">
        <h3>Qualifications</h3>
        <ul>
          {data.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>

      <div className="doctor-background">
        <h3>Professional Background</h3>
        <ul>
          <li>{data.professionalBackground}</li>
        </ul>
      </div>

      <div className="contact-information">
        <h3>Contact Information</h3>
        <p>Email: {data.email}</p>
        <p>Phone: {data.contactNumber}</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
