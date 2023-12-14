import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Rowpage = ({ title, fetchUrl }) => {
  // console.log(fetchUrl, "row pages");
  const [moives, setMoives] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(moives.length);
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
    <>
      <h2 className="text-white text p-2 mt-10 font-bold font-Poppins ">
        {title}
      </h2>
      <div className=" mb-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-7">
            {moives?.map((movie, id) => (
              <Link className=" relative" key={id}>
                <img
                  className=" rounded  w-full  h-auto inline-block "
                  src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                  alt=""
                />
                <div className="  absolute inset-0  opacity-0 hover:opacity-100 hover:bg-black/80 text-center flex flex-col items-center justify-center space-y-2">
                  <h3 className=" text-[16px] font-bold">
                    {movie.original_title}
                  </h3>
                  <p className=" max-w-[300px] text-[10px]">{movie.overview}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Rowpage;
