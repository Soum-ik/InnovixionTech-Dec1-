import { useEffect } from "react";

import axios from "axios";
import { requests } from "../../Request/Request";
import { useState } from "react";
import Rowpage from "./RowMoive";

const MovieFetch = () => {
  console.log(requests);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const randomBanner = data[Math.floor(Math.random() * data.length)];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(requests.requestPopular);
        setData(response.data.results); // Assuming the data is in response.data
        setLoading(false);
      } catch (error) {
        setLoading(true);
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
        {loading ? (
          <p className=" animate-pulse min-h-[20rem] bg-slate-500/20 rounded-md bg-cover text-center"></p>
        ) : (
          <img
            className=" object-center rounded-md max-h-[35rem] shadow-xl animate-pulse hover:animate-none duration-1000 delay-1000 transition-all shadow-red-600 w-full"
            src={`https://image.tmdb.org/t/p/original/${randomBanner?.backdrop_path}`}
            //alt=
          />
        )}

        {/* <p>{data[].original_title}</p> */}

        <Rowpage title={"Top Rated"} fetchUrl={requests.requestTopRated} />
        <Rowpage title={"Up Comming"} fetchUrl={requests.requestUpComming} />
        <Rowpage title={"Now Playing"} fetchUrl={requests.requestNowPlaying} />
        <Rowpage title={"Popular"} fetchUrl={requests.requestPopular} />
      </div>
    </div>
  );
};

export default MovieFetch;
