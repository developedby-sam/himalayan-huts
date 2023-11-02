import React from "react";
import "./loginsignup.styles.scss";

const Signup = () => {
	return (
		<div className='auth__signup'>
			<h2 className='auth__header'>Sign Up</h2>

			<button className='auth__google-btn'>Connect with Google</button>

			<div className='auth__divider'>
				<span>or</span>
			</div>

			<input type='text' placeholder='Name and Surname' className='auth__input' />
			<input type='email' placeholder='E-mail' className='auth__input' />
			<input type='password' placeholder='Password' className='auth__input' />
			<input type='password' placeholder='Password (Again)' className='auth__input' />

			<div className='auth__checkbox'>
				<input type='checkbox' id='terms' />
				<label htmlFor='terms'>I agree to the Membership Terms</label>
			</div>

			<button className='auth__submit-btn'>SIGN UP</button>
		</div>
	);
};

export default Signup;
