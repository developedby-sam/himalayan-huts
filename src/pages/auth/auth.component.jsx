import React from "react";
import { useState } from "react";
import "./auth.styles.scss";
import Login from "../../components/loginandsignup/login.component";
import Signup from "../../components/loginandsignup/signup.component";
import logo from "../../assets/logo.png";

const Auth = () => {
	const [showSignup, setShowSignup] = useState(false); // default to showing Login

	return (
		<section className='authcomponent'>
			<div className='auth'>
				<div className='auth__left'>
					<div className='auth__left-logo'>
						<img src={logo} alt='himalayanhuts' />
					</div>
					<h2>Why should I Join himalayanhuts?</h2>
					<p>
						To have the experience of "property", "information" and "trust" in the real estate world all
						together...
					</p>
					<div className='auth__left-benefits'>{}</div>
				</div>
				<div className='auth__right'>
					{showSignup ? <Signup /> : <Login />}
					<button className='auth__switch' onClick={() => setShowSignup(!showSignup)}>
						{showSignup ? "Switch to Login" : "Switch to Signup"}
					</button>
				</div>
			</div>
		</section>
	);
};

export default Auth;
