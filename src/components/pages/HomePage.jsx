import React, { Fragment } from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import CustomComponent from "../CustomComponent";
import { advertaise, download, kids } from "../../Contant/Contant";
import TV from "../../../public/images/tv.png";
import DOWNLOAD from "../../../public/images/download.jpg";
import KIDS from "../../../public/images/kids.png";
import img from "../../../public/images/mainbg.jpg";
function HomePage() {
  // console.log(mainbg);
  return (
    <>
      <div className="max-h-[60rem] relative pb-20">
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `url("/images/mainbg.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            filter: "brightness(0.8)",
          }}
        ></div>
        <Navbar />
        <Hero />
      </div>

      <div className=" bg-white/30 h-2 " />
      <CustomComponent advertaise={advertaise} img={TV} />
      <div className=" bg-white/30 h-2 " />
      <CustomComponent advertaise={download} img={DOWNLOAD} />
      <div className=" bg-white/30 h-2 " />
      <CustomComponent advertaise={kids} img={KIDS} />
      <div className=" bg-white/30 h-2 " />
    </>
  );
}

export default HomePage;
