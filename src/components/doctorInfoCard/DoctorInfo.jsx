
import './DoctorInfo.css'; 

const DoctorInfo = () => {
  return (
    <div className="doctor-info">
      <div className="doctor-description">
        <h3>About the doctor</h3>
        <p>
          Dr. John Doe is a compassionate and dedicated cardiologist with over 15 years of experience. He specializes in treating a wide range of heart conditions and is committed to providing personalized care to his patients. Dr. Doe believes in a holistic approach to health and emphasizes the importance of lifestyle changes in conjunction with medical treatment.
        </p>
      </div>

      <div className="doctor-qualifications">
        <h3>Qualifications</h3>
        <ul>
          <li>MD from Harvard Medical School</li>
          <li>Fellowship in Cardiology in Mayo Clinic</li>
          <li>Board certified in Cardiology</li>
        </ul>
      </div>

      <div className="doctor-background">
        <h3>Professional Background</h3>
        <ul>
          <li>Senior Cardiologist at City Hospital</li>
          <li>Assistant Professor of Cardiology at State Medical School</li>
        </ul>
      </div>

      <div className="contact-information">
        <h3>Contact Information</h3>
        <p>Email: johndoe@gmail.com</p>
        <p>Phone: (+94) 123 4567</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
