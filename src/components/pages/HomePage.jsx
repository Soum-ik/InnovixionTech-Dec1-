import React from "react";
import Advertise from "../Advertise";
import Navbar from "../Navbar";
import Hero from "../Hero";
import styles from "../../style/style";

function HomePage() {
  // console.log(mainbg);
  return (
    <div className={` bg-black min-h-screen`}>
      <Navbar />
      <Hero />
      <Advertise />
    </div>
  );
}

export default HomePage;
