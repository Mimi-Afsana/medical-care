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
            <h4 className="text-primary">About my goal.</h4>
            <p>
              My first and most important goal is i want to finish programming
              hero course on time. After finish this course my second target is
              make some website how much i can. I want to be a web developer. I
              want to be a fronted developer and later my aim is i am learning
              backend also.
            </p>
          </div>
          <div>
            <h4 className="text-primary">
              And how you will work hard to achieve your goal.
            </h4>
            <p>
              Really i work hard to acheive this goal. Always i tried to keep
              myself motivated. Everyday i make a plan how can i finish my all
              work and step by step finish my work. Manage my time effecttively.
              Working continuously make me feel tired and inactive that is wy
              take short break between work. My mobile phone keep away from my
              work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
