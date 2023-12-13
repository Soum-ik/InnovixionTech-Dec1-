import styles, { layout } from "../style/style";
import CustomData from "./CustomData";

const CustomComponent = ({ advertaise, img }) => {
  console.log(advertaise, img);
  return (
    <div className={`${styles.marginX} ${styles.flexCenter} text-white`}>
      <div className={`${styles.padding}`}>
        <section className={`${layout.section} w-full`}>
          {/* left section */}
          <div className={`${layout.sectionReverse}`}>
            <div className=" absolute left-1/2 bottom-0  z-90 w-[60%] h-[60%] rounded-full"></div>
            <div className=" absolute right-1/2 bottom-0 white z-90 w-[60%] h-[60%] rounded-full"></div>
            <img src={img} alt="" />
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
export default CustomComponent;
