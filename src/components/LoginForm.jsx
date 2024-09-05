import './LoginForm.css';

const UserLogin = () => {
  return (
    
      
        <div className="form-container">
          <form className="login-form" action="/login" method="POST">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <p>Forgot Password?</p>
            <button type="submit">Login</button>
          </form>
        </div>
     
  );
};

export default UserLogin;
