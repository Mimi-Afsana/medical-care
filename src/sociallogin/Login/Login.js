import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../Social Login/SocialLogin";
import { useNavigate } from "react-router";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    console.log("user", user);
    navigate("/home");
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <Form
        onSubmit={handleRegister}
        className="w-50 mx-auto p-5 rounded mt-5 bg-success p-2 text-dark bg-opacity-10 "
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={emailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={passwordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {errorElement}

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="mt-4">
          New to Come here?{" "}
          <Link
            to="/signup"
            className="text-primary pe-auto text-decoration-none"
          >
            Please SignUp
          </Link>{" "}
        </p>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
