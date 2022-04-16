import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../Social Login/SocialLogin";

const Signup = () => {
  return (
    <div>
      <Form className="w-50 mx-auto p-5 rounded mt-5 bg-success p-2 text-dark bg-opacity-10 ">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type=" password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p className="mt-4">
          If sign up already?{" "}
          <Link
            to="/login"
            className="text-primary pe-auto text-decoration-none"
          >
            Please Login
          </Link>{" "}
        </p>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
