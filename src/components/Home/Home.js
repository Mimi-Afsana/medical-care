import React from "react";
import Carusel from "./Carusel/Carusel";
import HomeVisit from "./HomeVisit/HomeVisit";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Carusel></Carusel>
      <Services></Services>
      <HomeVisit></HomeVisit>
    </div>
  );
};

export default Home;
