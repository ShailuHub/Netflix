import { useDispatch } from "react-redux";
import { TMDB_OPTION } from "../../utils/constant";
import { randomIndex } from "../../utils/helper";
import { addTrailerVideoId } from "../../store/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        TMDB_OPTION
      );
      const jsonData = await data.json();

      const trailerVideoList = jsonData.results.filter(
        (item) => item.type === "Trailer"
      );
      const randomIdx = randomIndex(trailerVideoList.length);
      dispatch(addTrailerVideoId(trailerVideoList[randomIdx].key));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useTrailerVideo;
