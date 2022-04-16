import React from "react";
import glogo from "../../images/google.png";
const SocialLogin = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <button className="container border-0 bg-white ">
        <img className="me-4" height="30px" width="30px" src={glogo} alt="" />{" "}
        <span className="bg-success p-2 text-dark bg-opacity-25 rounded-pill px-3">
          Google signin
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;
