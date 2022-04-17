import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Darudul Islam</h2>
      <div className="about-me mt-4">
        <div>
          <img
            src={"https://i.ibb.co/w7zvz5z/home-visit.jpg"}
            alt=""
            width="800px"
            height="450px"
          />
        </div>
        <div>
          <div>
            <h4 className='text-primary'>About my goal</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quia, error iure commodi enim reprehenderit recusandae tempore
              rerum quas, nemo quae excepturi sint eaque, minima quisquam
              dolorem alias repellat id.
            </p>
          </div>
          <div>
            <h4 className='text-primary'>And how you will work hard to achieve your goal.

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
