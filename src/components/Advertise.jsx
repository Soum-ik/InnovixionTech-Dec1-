import styles, { layout } from "../style/style";
import Tv from "../images/tv.png";
import CustomData from "./CustomData";
import { advertaise } from "../Contant/Contant";

const Advertise = () => {
  return (
    <div className={`${styles.marginX} ${styles.flexCenter} text-white`}>
      <div className={`${styles.padding}`}>
        
        <section className={`${layout.section} w-full`}>
          {/* left section */}  
          <div className={`${layout.sectionReverse}`}>
            <div className=" absolute right-1/2 bottom-0 white z-90 w-[60%] h-[60%] rounded-full"></div>
            <div className=" absolute -right-3/4 bottom-0 white z-90 w-[60%] h-[60%] rounded-full"></div>
            <img  src={Tv} alt="" />
          </div>

          {/* right section */}
          <CustomData
            heading={advertaise.heading}
            tittle={advertaise.littelDic}
          />
        </section>
      </div>
    </div>
  );
};
export default Advertise;
