import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; import "./login.css"; // Import the CSS file for styling
import Input from "components/Form/input";
import { useUser } from "../../context/user.context";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [resetPassword, setResetPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate();
	const { setUser } = useUser();
	const handleLogin = () => {
		// Extract the domain from the email address
		const domain = email.split("@")[1];

		if (domain === "admin.com" && password === "admin123") {
			alert("Admin login successful"); // Show success message
			// Redirect to cohort page
			setUser({ mail: '@admin.com', role: "admin", name: "admin" });
			navigate("/projects");
		} else if (domain === "student.com" && password === "student123") {
			alert("Student login successful"); // Show success message
			// Redirect to student dashboard
			setUser({ mail: '@student.com', role: "student", name: "student" });
			navigate("/projects"); // Use the navigate function to navigate to the desired URL
		} else {
			alert("Login failed");
		}
	};

	const handleResetPassword = () => {
		if (newPassword !== confirmPassword) {
			alert("New password and confirm password do not match!");
			return;
		}
		// Handle password reset logic here
		alert("Password reset successful!");
		setResetPassword(false);
	};

	return (
		<div className="login">
			<h1 className="login-heading">Login</h1>
			<form className="login-form">
				<Input labelTxt={ 'Email' } id='email' type={ 'email' } onChangeFn={ (e) => setEmail(e.target.value) } value={ email } className={ 'login-input' } />
				<br />
				{ !resetPassword && (
					<>
						<Input labelTxt={ 'Password' } id='password' type={ 'password' } onChangeFn={ (e) => setPassword(e.target.value) } value={ password } className={ 'login-input' } />
						<br />
					</>
				) }
				{ resetPassword ? (
					<>
						<label className="login-label">New Password:</label>
						<input
							className="login-input"
							type="password"
							value={ newPassword }
							onChange={ (e) => setNewPassword(e.target.value) }
						/>
						<br />
						<label className="login-label">Confirm Password:</label>
						<input
							className="login-input"
							type="password"
							value={ confirmPassword }
							onChange={ (e) => setConfirmPassword(e.target.value) }
						/>
						<br />
						<button
							className="login-button"
							type="button"
							onClick={ handleResetPassword }
						>
							Reset Password
						</button>
						<br />
					</>
				) : (
					<>
						<div className="login-actions-container">
							<section className="checkbox-container">
								<input
									className="login-checkbox"
									id="remember-me"
									type="checkbox"
									checked={ rememberMe }
									onChange={ () => setRememberMe(!rememberMe) }
								/>
								<label className="remember-me-label" htmlFor="remember-me">
									Remember me
								</label>
							</section>

							<button
								className="login-button forgot-password"
								type="button"
								onClick={ () => setResetPassword(true) }
							>
								Forgot Password?
							</button>
						</div>
						<br />
						<button
							className="login-button primary"
							type="button"
							onClick={ handleLogin }
						>
							Login
						</button>
					</>
				) }
			</form>
		</div>
	);
};

export default Login;
