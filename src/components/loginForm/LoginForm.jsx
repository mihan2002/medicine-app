import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="form-container">
      <form className="login-form" action="/login" method="POST">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <p>Forgot Password?</p>
        <button className="login-button" type="submit">Login</button>
        <p>Or do it via other accounts</p>
        <img src="src\assets\googlelogo.png" alt="google-logo" />
        <p>
          Dont have an account? <b>Sign Up</b>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
