import { useDispatch } from "react-redux";
import { TMDB_OPTION } from "../../utils/constant";
import { addPopularMovie } from "../../store/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const getPopularMovieInfo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        TMDB_OPTION
      );
      const jsonData = await data.json();
      dispatch(addPopularMovie(jsonData.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPopularMovieInfo();
  }, []);
};

export default usePopularMovie;
