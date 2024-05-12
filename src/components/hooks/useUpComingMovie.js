import { useDispatch } from "react-redux";
import { TMDB_OPTION } from "../../utils/constant";
import { addUpComingMovie } from "../../store/movieSlice";
import { useEffect } from "react";

const useUpComingMovie = () => {
  const dispatch = useDispatch();
  const getUpComingMovieInfo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        TMDB_OPTION
      );
      const jsonData = await data.json();
      dispatch(addUpComingMovie(jsonData.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUpComingMovieInfo();
  }, []);
};

export default useUpComingMovie;
