import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		const auth = localStorage.getItem('user');
		if (auth) {
			navigate('/');
		}
	}, []);

	const collectData = async () => {
		let userDate = {
			name,
			email,
			password
		};
		const url = 'https://rahulkaproject.herokuapp.com/register';

		let result = await axios.post(url, userDate);

		console.log(result);
		localStorage.setItem('user', JSON.stringify(result));
		navigate('/');
	};

	return (
		<div className="register">
			<h1>Register</h1>
			<input
				className="inputBox"
				type="text"
				placeholder="Enter Name"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<input
				className="inputBox"
				type="text"
				placeholder="Enter Email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				className="inputBox"
				type="password"
				placeholder="Enter Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button onClick={collectData} className="appButton" type="button">
				Sign Up
			</button>
		</div>
	);
};
export default SignUp;
