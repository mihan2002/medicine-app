import ContentContainer from "../components/ContentContainer";
import './UserCreateAccount.css';
import CreateAccountForm from '../components/CreateAccountForm'; 

const UserCreateAccount = () => {
  return (
    
    <div className="container">
      <div className="aside">
        <img src="src\assets\sidenav-bg.png" alt="" />
        <div className="logo">logo</div>
        <div className="text-overlay">
            <h2>Welcome to MedAI <br></br>Connect</h2>
            <p>Breaking Barriers in Healthcare</p>
        </div>
      </div>
      <div className="form-container">
        <div className="welcome-title">
          <h2>Create your account</h2>
          <p>It's free and easy</p>
        </div>
        <div className="form">
          <CreateAccountForm></CreateAccountForm>        
          

        </div>
      </div>
    </div>
    
  );
};

export default UserCreateAccount;
