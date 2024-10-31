import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../Social Login/SocialLogin";
import { useNavigate } from "react-router";
import { signOut } from "@firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const logout = () => {
    signOut(auth);
  };

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    return <Loading />;
  }
  if (user) {
    console.log("user", user);
    navigate("/home");
  }

  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrors(" Passwords didn't match");
      return;
    }
    if (password.length < 6) {
      setErrors("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
      <Form
        onSubmit={handleRegister}
        className="p-4 p-sm-5 rounded mt-4 bg-success bg-opacity-10"
      >
        <h3 className="text-center mb-4">Sign Up</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={emailBlur}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={passwordBlur}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={confirmPasswordBlur}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <p className="text-danger">{errors}</p>

        {user ? (
          <button
            className="bg-warning fw-bold border-0 rounded-pill px-3 w-100 mb-3"
            onClick={logout}
          >
            Sign out
          </button>
        ) : (
          <button
            className="bg-primary text-white fw-bold border-0 rounded px-4 py-2 w-100 mb-3"
            type="submit"
          >
            Sign Up
          </button>
        )}

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary text-decoration-none"
            onClick={navigateLogin}
          >
            Login
          </Link>
        </p>
      </Form>

      <div className="d-flex justify-content-center mt-3">
        <SocialLogin />
      </div>
    </div>
  );
};

export default Signup;
