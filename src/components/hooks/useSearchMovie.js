import { TMDB_OPTION } from "../../utils/constant";
import { useEffect } from "react";

const useSearchMovie = (movie) => {
  const getRecommendedMovie = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
        TMDB_OPTION
      );
      const jsonData = await data.json();
      return jsonData.results;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecommendedMovie();
  }, []);
};

export default useSearchMovie;
