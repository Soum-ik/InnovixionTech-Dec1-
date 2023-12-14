import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Rowpage = ({ title, fetchUrl }) => {
  console.log(fetchUrl, "row pages");
  const [moives, setMoives] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(moives.length);
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
      <h2 className="text-white text p-2 mt-10 font-bold font-Poppins">
        {title}
      </h2>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-7">
            {moives?.map((movie, id) => (
              <Link className="" key={id}>
                <img
                  className=" rounded  w-full  h-auto inline-block "
                  src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                  alt=""
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Rowpage;
