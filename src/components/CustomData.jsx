import styles, {layout} from "../style/style";
const CustomData = ({ heading, tittle }) => {
  return (
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {heading}
        {/* <span className=" hidden sm:block ">{brTitle}</span> */}
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>{tittle}</p>
      {/* {Button && <Button style={"mt-7 "} />}
      {dButton && <DowloadButton />} */}
    </div>
  );
};
export default CustomData;
