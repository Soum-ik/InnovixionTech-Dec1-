import { Link } from "react-router-dom";
import styles from "../style/style";
import mainLogo from "../../public/images/mainLogo.png";
import Button from "./Button";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className={` ${styles.flexCenter} ${styles.paddingX} text-white`}>
      <div className={`${styles.boxWidth}`}>
        <nav className=" flex items-center relative justify-between mt-5 w-full">
          {/* <div className=""> </div> */}
          <Link to={"/"}>
            <img className="  w-36" src={mainLogo} alt="" />
          </Link>

          {/* desktop */}
          <p
            onClick={handleNav}
            className=" sm:hidden text-[40px] flex  items-center justify-center"
          >
            O
          </p>
          <ul className=" hidden sm:flex items-center justify-center font-Poppins font-bold space-x-3 lg:space-x-10">
            <Link
              to={"/"}
              className=" hover:text-[red] cursor-pointer delay-150 "
            >
              Home
            </Link>
            <Link className=" hover:text-[red] cursor-pointer delay-150 ">
              Top Rated
            </Link>
            <Link className=" hover:text-[red] cursor-pointer delay-150 ">
              Popular
            </Link>
            <Link className=" hover:text-[red] cursor-pointer delay-150 ">
              Up Comming
            </Link>
            <Link className=" hover:text-[red] cursor-pointer delay-150 ">
              Now Playing
            </Link>
            <Button text={"Sing In"} padding={"p-2"} />
          </ul>
        </nav>

        {/* mobile part */}
        {isOpen ? (
          <ul className=" flex flex-col  sm:hidden items-center justify-center space-y-6 bg-slate-50/5 backdrop-blur-sm font-Poppins font-bold text-[25px] xs:mx-10 xs:p-6 mt-5 p-5 rounded-md min-h-fit xs:min-h-screen">
            <Link
              to={"/"}
              className=" hover:text-[red] cursor-pointer delay-150 "
            >
              Home
            </Link>
            <Link className=" hover:text-[red] cursor-pointer delay-150 ">
              Top Rated
            </Link>
            <Link className=" hover:text-[red] cursor-pointer delay-150 ">
              Popular
            </Link>
            <Link className=" hover:text-[red] cursor-pointer delay-150 ">
              Up Comming
            </Link>
            <Link className=" hover:text-[red] cursor-pointer delay-150 ">
              Now Playing
            </Link>
            <Button text={"Sing In"} padding={"p-2"} />
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
