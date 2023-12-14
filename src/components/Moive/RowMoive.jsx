import axios from "axios";
import { useEffect, useState } from "react";

import Moive from "./Moive";

// eslint-disable-next-line react/prop-types
const Rowpage = ({ title, fetchUrl }) => {
  // console.log(fetchUrl, "row pages");
  const [moives, setMoives] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(fetchUrl);
        setMoives(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Moive title={title}  loading={loading} moives={moives}/>
  );
};
export default Rowpage;
