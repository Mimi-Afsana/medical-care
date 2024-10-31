import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const submitForm = async () => {
    toast("Thank you for your inquiry. We will get back to you soon.");
  };

  return (
    <div className="container col-lg-6 col-md-8 col-sm-10 col-12 mx-auto mt-5">
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phoneInput" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control"
          id="phoneInput"
          placeholder="Enter your contact number"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="messageTextarea" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="messageTextarea"
          rows="3"
          placeholder="Enter your message here"
        ></textarea>
      </div>

      <div className="d-flex ">
        <button
          onClick={submitForm}
          className="border-0 bg-success text-white px-4 py-2 rounded fw-bold"
        >
          Submit
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
