import { useState } from "react";
import Input from "components/Form/input";
import { useUser } from "../../context/user.context";
import './profiles.css';

function Profile () {
	const { currentUser } = useUser(),
		[email, setEmail] = useState(''),
		[username, setUsername] = useState(''),
		[password, setPassword] = useState(),
		[confirmPassword, setConfirmPassword] = useState();

	return (
		<div>
			<h1 className="login-heading">Update profile</h1>
			<form className="profile-form">
				<Input labelTxt={ 'Email' } id='email' type={ 'email' } onChangeFn={ (e) => setEmail(e.target.value) } value={ email } required={ true } />
				<br />

				<Input labelTxt={ 'Username' } id='username' type={ 'text' } onChangeFn={ (e) => setUsername(e.target.value) } value={ username } required={ true } />
				<br />

				<Input labelTxt={ 'password' } id='password' type={ 'password' } onChangeFn={ (e) => setPassword(e.target.value) } value={ password } required={ true } autocomplete={ 'new-password' } />
				<br />

				<Input labelTxt={ 'confirm password' } id='confirm_password' type={ 'password' } onChangeFn={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword } required={ true } autocomplete={ 'new-password' } />
				<br />
				{/*
				<button
					className="login-button forgot-password"
					type="button"
					onClick={ () => setResetPassword(true) }
				>
					Forgot Password?
				</button> */}
				<br />
				<button
					className="update-button"
					type="button"
				// onClick={ handleLogin }
				>
					Update
				</button>
			</form>
		</div>
	);
}

export default Profile;
