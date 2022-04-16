import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../Social Login/SocialLogin";
const Login = () => {
  return (
    <div>
      <Form className="w-50 mx-auto p-5 rounded mt-5 bg-success p-2 text-dark bg-opacity-10 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className='mt-4'>
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
