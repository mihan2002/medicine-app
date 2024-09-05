import './CreateAccountForm.css';

const UserCreateAccount = () => {
  return (
    
      
        <div className="form-container">
          <form className="login-form" action="/login" method="POST">
            <div className="form-group">
              <label htmlFor="firstname">First name</label>
              <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last name</label>
              <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="Enter your e-mail" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <div class="form-group">
              <label for="date">Date of Birth</label>
              <input type="date" id="birthday" name="birthday" required/>
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
              <select id="gender" name="gender" required>
                <option value="" disabled selected>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>
            <button type="submit">Sign Up</button>
            <p>Or do it via other accounts</p>
            <img src="src\assets\googlelogo.png" alt="google-logo" />
            <p>Don't have an account? <b>Sign Up</b></p>
          </form>
        </div>
     
  );
};

export default UserCreateAccount;
