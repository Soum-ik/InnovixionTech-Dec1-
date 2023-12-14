import { Fragment } from "react";
import Navbar from "../Navbar";
import styles from "../../style/style";

const MoviePage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-white ${styles.padding}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          magnam laborum, facilis repellendus perferendis, repudiandae doloribus
          velit atque qui blanditiis iure impedit, cum sed aspernatur fugit fuga
          sunt magni nostrum.
        </div>
      </div>
    </Fragment>
  );
};
export default MoviePage;
