import { FaArrowRight } from "react-icons/fa6";
import styles from "../style/style";
import Button from "./Button";

const Hero = () => (
  <div
    className={`${styles.marginX} ${styles.flexCenter} drop-shadow-2xl shadow-black`}
  >
    <div className={`${styles.boxWidth} ${styles.paddingY} text-white`}>
      <div className=" flex items-center justify-center flex-col mt-20 gap-2 w-full">
        <h2 className={`${styles.paragraph}`}>Welcome back</h2>
        <h1
          className={`${styles.heading2} 
     text-center`}
        >
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className={`${styles.paragraph} mb-6`}>Watch anywhere. Cancel anytime.</h2>
        <Button
          icon={<FaArrowRight />}
          padding={"p-3"}
          text={"Finish Sing UP"}
        />
      </div>
    </div>
  </div>
);
export default Hero;
