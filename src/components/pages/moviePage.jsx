import Navbar from "../Navbar";
import { Fragment } from "react";
import styles from "../../style/style";
import MovieFetch from "../Moive/MoiveFetch";
const MoviePage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-white mt-5`}>
          {/* {data.map} */}
          <MovieFetch />
        </div>
      </div>
    </Fragment>
  );
};
export default MoviePage;
