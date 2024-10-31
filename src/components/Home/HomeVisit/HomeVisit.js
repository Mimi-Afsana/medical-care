import React from "react";
import "./HomeVisit.css";
const HomeVisit = () => {
  return (
    <div className=" grid-doctor container">
      <div className="mt-4">
        <img
          className="first-img mt-4 rounded"
          src={"https://i.ibb.co/w7zvz5z/home-visit.jpg"}
          alt=""
          width="500px"
          height="500px"
        />
      </div>
      <div className="mt-5 ">
        <h2 className="text-primary">Doctor Home Visit</h2>
        <h4 className="text-info">
          Medical Home service in the comfort of your own home
        </h4>
        <p>Timely & Convenient: Medical Care</p>
        <p>
          Chronic Care: Assisting patients in managing ongoing chronic diseases.
        </p>
        <p>
          Home health care clients have comparable or better health outcomes
        </p>
        <p>One-on-one focus and support</p>
        <p>An affordable alternative to the facility or hospital care</p>

        <h4>Scheduling and Pricing:</h4>
        <small>(Requests made between)</small>
        <h4>8 pm – 12 pm - Price: $50 </h4>
        <h4>8 pm – 10 pm - Price: $100</h4>
        <p>Available only Saturday and Sunday</p>
        <button className="bg-success text-white border-0 rounded fw-bold px-4">
          <img
            height="30px"
            width="30px"
            className="mt-2"
            src={"https://i.ibb.co/mNc3HKv/Png-Item-1093378.png"}
            alt=""
          />{" "}
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default HomeVisit;
