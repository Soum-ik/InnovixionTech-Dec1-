import React from "react";
// import mainbg from "./mainbg.jpg";
import Navbar from "../Navbar";
import Hero from "../Hero";

function    HomePage() {
  // console.log(mainbg);
  return (
    <div className=" bg-slate-950 min-h-screen">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default HomePage;
