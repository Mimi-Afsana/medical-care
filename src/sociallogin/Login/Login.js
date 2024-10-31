import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../Social Login/SocialLogin";
import { useLocation, useNavigate } from "react-router";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const resetpass = async (event) => {
    setEmail(event.target.value);
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email address");
    }
  };

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    console.log("user", user);
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />;
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
    <div className="container col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
      <Form
        onSubmit={handleRegister}
        className="p-4 p-sm-5 rounded mt-4 bg-success bg-opacity-10"
      >
        <h3 className="text-center mb-4">Login</h3>

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

        {errorElement}

        <Button
          variant="primary"
          type="submit"
          className="w-100 mb-3 py-2"
        >
          Login
        </Button>
      </Form>

      <p className="mt-4 text-center">
        New to Come here?{" "}
        <Link to="/signup" className="text-primary text-decoration-none">
          Please Sign Up
        </Link>
      </p>

      <p className="text-center">
        Forgot Password?{" "}
        <button
          onClick={resetpass}
          className="btn btn-link text-primary text-decoration-none"
        >
          Reset Password
        </button>
      </p>

      <div className="d-flex justify-content-center">
        <SocialLogin />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
