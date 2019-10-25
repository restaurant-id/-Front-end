import React, { useState } from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/users/login', credentials)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				props.history.push('/');
				window.location.reload(false);
			})
			.catch(err => console.log(err));
	};

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	return (
		<>
			<Container>
				<Form onSubmit={handleSubmit}>
					<Form.Field>
						<label>Username</label>
						<Input
							type='text'
							name='username'
							value={credentials.username}
							onChange={handleChange}
							placeholder='Username'
							required
						/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<Input
							type='password'
							name='password'
							value={credentials.password}
							onChange={handleChange}
							placeholder='Password'
							required
						/>
					</Form.Field>
					<Button>Login</Button>
				</Form>
			</Container>
		</>
	);
};

export default Login;
