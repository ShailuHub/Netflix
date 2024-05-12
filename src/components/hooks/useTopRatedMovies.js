import { useDispatch } from "react-redux";
import { TMDB_OPTION } from "../../utils/constant";
import { addTopRatedMovie } from "../../store/movieSlice";
import { useEffect } from "react";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const getTopRatedMovieInfo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        TMDB_OPTION
      );
      const jsonData = await data.json();
      dispatch(addTopRatedMovie(jsonData.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopRatedMovieInfo();
  }, []);
};

export default useTopRatedMovie;
