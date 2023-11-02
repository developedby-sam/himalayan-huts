import React from "react";
import "./loginsignup.styles.scss";

const Login = () => {
	return (
		<div className='auth__login'>
			<h2>Login</h2>

			<button className='auth__google-btn'>Connect with Google</button>

			<input type='email' placeholder='E-mail' className='auth__input' />
			<input type='password' placeholder='Password' className='auth__input' />

			<button className='auth__submit-btn'>LOGIN</button>
		</div>
	);
};

export default Login;
