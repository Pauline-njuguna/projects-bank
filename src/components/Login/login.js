import React, { useState } from "react";
import "./login.css"; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
  // Handle login logic here
  // e.g. send email and password to backend for authentication
  if (email === "example@example.com" && password === "password123") {
    // Replace the above condition with your actual login logic
    alert("Successful login"); // Show success message
  } else {
    alert("Login failed"); // Show failure message
  }
};


  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    // Handle password reset logic here
    // e.g. send email and newPassword to backend to update user's password
    // and send an email with the new password to user's email address
    alert("Password reset successful!");
    setResetPassword(false);
  };

  return (
    <div className="login">
      <h1 className="login-heading">Login</h1>
      <form className="login-form">
        <label className="login-label">Email:</label>
        <input
          className="login-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {!resetPassword && (
          <>
            <label className="login-label">Password:</label>
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </>
        )}
        {resetPassword ? (
          <>
            <label className="login-label">New Password:</label>
            <input
              className="login-input"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <label className="login-label">Confirm Password:</label>
            <input
              className="login-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button
              className="login-button"
              type="button"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
            <br />
          </>
        ) : (
          <>
            <button
              className="login-button"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
            <br />
            <button
              className="login-button"
              type="button"
              
              onClick={() => setResetPassword(true)}>
            
              Forgot Password
            </button>
            <br />
            <label className="login-label">
              <input
                className="login-checkbox"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
