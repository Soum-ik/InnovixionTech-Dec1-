/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Moive from "./Moive";

const Rowpage = React.memo(({ title, fetchUrl }) => {
  const [moives, setMoives] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovieData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(fetchUrl);
      setMoives(response.data.results);
      setLoading(false)
    } catch (err) {
      setLoading(true)
      console.log(err);
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return <Moive title={title} loading={loading} moives={moives} />;
});

export default Rowpage;
