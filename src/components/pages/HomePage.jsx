// import React, { Fragment } from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import CustomComponent from "../CustomComponent";
import { advertaise, download, kids } from "../../Contant/Contant";
import TV from "../../../public/images/tv.png";
import DOWNLOAD from "../../../public/images/download.jpg";
import KIDS from "../../../public/images/kids.png";
// import { Link } from "react-router-dom";

function HomePage() {
  const url = "https://github.com/Soum-ik";
  return (
    <>
      <div
        className="max-h-[60rem] bg-cover bg-opacity-95  bg-center relative pb-20"
        style={{ backgroundImage: `url("/images/mainbg.jpg")` }}
      >
        <div className=" z-30">
          <Navbar />
          <Hero />
        </div>
        {/* <div className=" bg-gradient-to-b z-20 absolute w-full from-black/50 h-[60rem]  "></div> */}
        {/* <div className=" bg-gradient-to-t z-20 absolute w-full from-black/50 h-[60rem]  "></div> */}
      </div>

      <div className=" bg-white/30 h-2 " />
      <CustomComponent advertaise={advertaise} img={TV} />
      <div className=" bg-white/30 h-2 " />
      <CustomComponent advertaise={download} img={DOWNLOAD} />
      <div className=" bg-white/30 h-2 " />
      <CustomComponent advertaise={kids} img={KIDS} />

      <div className=" shadow-2xl shadow-red-500 pb-2 bg-white items-center text-center font-Poppins font-bold text-[24px]">
        Develop by{" "}
        <a
          target="_blank"
          href={`${url}`}
          className=" cursor-pointer pl-2 text-[red]  hover:text-shadow-xl ease-in-out delay-75"
          rel="noreferrer"
        >
          Soumik
        </a>
      </div>
    </>
  );
}

export default HomePage;
