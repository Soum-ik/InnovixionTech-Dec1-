/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const Moive = ({ title, loading, moives }) => {
  const [like, setLike] = useState(true);
  return (
    <>
      <h2 className="text-white text p-2 mt-10 font-bold font-Poppins ">
        {title}
      </h2>
      <div className=" mb-10">
        {loading ? (
          <p className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 bg-slate-500/20 min-h-[10rem] animate-pulse"></p>
        ) : (
          <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-7">
            {moives?.map((movie, id) => (
              <Link className=" relative" key={id}>
                <img
                  className=" rounded  w-full  h-auto inline-block "
                  src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                  alt=""
                />
                <div className=" text-red-600  absolute inset-0  opacity-0 hover:opacity-100 hover:bg-black/80 text-center flex flex-col items-center justify-center space-y-2">
                  <h3 className=" text-[16px] font-bold">
                    {movie.original_title}
                  </h3>
                  <p className=" hidden ss:block text-white max-w-[300px] text-[10px]">
                    {movie.overview}
                  </p>
                  <p
                    className=" text-[30px] absolute top-3 left-4"
                    onClick={() => setLike(!like)}
                  >
                    {like ? <FaRegHeart /> : <FaHeart />}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Moive;
