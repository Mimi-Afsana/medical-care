import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container mt-5">
      <div className="about-me">
        <div>
          <img
            src={"https://i.ibb.co/bLm9Qnp/Islam1.jpg"}
            alt=""
            className="w-100 rounded-circle"
            height="500px"
          />
        </div>
        <div>
          <div>
            <h2 className="mt-5 mb-5">Darudul Islam</h2>
            <h4 className="text-primary">About my goal</h4>
            <p>ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          </div>
          <div>
            <h4 className="text-primary">
              And how you will work hard to achieve your goal.
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quia, error iure commodi enim reprehenderit recusandae tempore
              rerum quas, nemo quae excepturi sint eaque, minima quisquam
              dolorem alias repellat id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
