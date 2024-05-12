import { useDispatch } from "react-redux";
import { TMDB_OPTION } from "../../utils/constant";
import { addNowPlayingMovie } from "../../store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovieInfo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        TMDB_OPTION
      );
      const jsonData = await data.json();
      dispatch(addNowPlayingMovie(jsonData.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovieInfo();
  }, []);
};

export default useNowPlayingMovie;
