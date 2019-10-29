import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "semantic-ui-react";
import axios from "axios";
import * as Yup from "yup";
import { Field, withFormik } from "formik";
import history from "../utils/history";
import "semantic-ui-css/semantic.min.css";

const Login = ({ errors, touched, values, status }) => {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    if (status) {
      setCredentials([...credentials, status]);
    }
  }, [credentials, status]);

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: values.username,
      password: values.password
    };
    axios
      .post("https://build-restaurant-passport.herokuapp.com/users/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        history.push("/");
        window.location.reload(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label>Username</label>
          <Field
            component="input"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <label>Password</label>
          <Field
            component="input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <Button>Login</Button>
        </Form>
      </Container>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username."),
    password: Yup.string().required("Please enter your password.")
  })
});

const LoginWithFormik = formikHOC(Login);

export default LoginWithFormik;