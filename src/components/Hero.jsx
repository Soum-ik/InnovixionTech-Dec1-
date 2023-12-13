import styles from "../style/style";
import Button from "./Button";

const Hero = () => (
  <div className={`${styles.marginX} ${styles.flexCenter} drop-shadow-2xl shadow-black`}>
    <div className={`${styles.boxWidth} ${styles.paddingY} text-white`}>
      <div className=" flex items-center justify-center flex-col mt-20 gap-2">
        <h2 className=" text-[25px]">Welcome back</h2>
        <h1 className={`${styles.heading2} 
     text-center`}>
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className=" text-[25px] mb-5">Watch anywhere. Cancel anytime.</h2>
        <Button text={"Finish Sing UP"} />
      </div>
    </div>
  </div>
);
export default Hero;
