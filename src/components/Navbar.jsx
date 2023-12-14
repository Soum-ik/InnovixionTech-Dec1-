import { Link } from "react-router-dom";
import styles from "../style/style";
import mainLogo from "../../public/images/mainLogo.png";
import Button from "./Button";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={` ${styles.flexCenter} ${styles.paddingX} text-white`}>
      <div className={`${styles.boxWidth}`}>
        <nav className=" flex items-center relative justify-between mt-5 w-full">
          {/* <div className=""> </div> */}
          <Link to={"/"}>
            <img className=" w-36" src={mainLogo} alt="" />
          </Link>
          <ul>
            <Button text={"Sing In"} padding={"p-2"} />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
