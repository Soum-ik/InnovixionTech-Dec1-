import { useEffect } from "react";

import axios from "axios";
import { requests } from "../../Request/Request";
import { useState } from "react";
import Rowpage from "./RowMoive";

const MovieFetch = () => {
  console.log(requests);
  const [data, setData] = useState([]);

  const randomBanner = data[Math.floor(Math.random() * data.length)];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.requestPopular);
        setData(response.data.results); // Assuming the data is in response.data
      } catch (error) {
        // Handle error here
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className=" w-full">
      <div>
        <img
          className=" object-center rounded-md max-h-[35rem] shadow-xl animate-pulse hover:animate-none duration-1000 delay-1000 transition-all shadow-red-600 w-full"
          src={`https://image.tmdb.org/t/p/original/${randomBanner?.backdrop_path}`}
          //alt=
        />
        <Rowpage title={"Top Rated"} fetchUrl={requests.requestTopRated} />
        <Rowpage title={"Up Comming"} fetchUrl={requests.requestUpComming} />
        <Rowpage title={"Now Playing"} fetchUrl={requests.requestNowPlaying} />
        <Rowpage title={"Popular"} fetchUrl={requests.requestPopular} />
      </div>
    </div>
  );
};

export default MovieFetch;
