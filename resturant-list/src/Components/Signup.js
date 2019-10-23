import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Container, Form, Input, Button } from 'semantic-ui-react';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({email: '', username: '', password: ''})
  
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/users/register', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      props.history.push('/login')
    })
    .catch(err => console.log(err));
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <Input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <Input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </Form.Field>
          <Button>Sign Up</Button>
        </Form>
      </Container>
    </>
  );
}

export default Signup;