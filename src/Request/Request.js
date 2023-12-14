const url = "https://api.themoviedb.org/3/movie";

export const requests = {
  requestPopular: `${url}/popular?api_key=${
    import.meta.env.VITE_REACT_TMDB_API_KEY
  }`,
  requestNowPlaying: `${url}/now_playing?api_key=${
    import.meta.env.VITE_REACT_TMDB_API_KEY
  }`,
  requestTopRated: `
  ${url}/movie/top_rated?api_key=${import.meta.env.VITE_REACT_TMDB_API_KEY}`,
  requestUpComming: `${url}/upcoming?api_key=${
    import.meta.env.VITE_REACT_TMDB_API_KEY
  }`,
};
