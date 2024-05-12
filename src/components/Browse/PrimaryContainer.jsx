import { useSelector } from "react-redux";
import Trailer from "./Trailer";
import TrailerTitle from "./TrailerTitle";
import { randomIndex } from "../../utils/helper";

const PrimaryContainer = () => {
  const moviesList = useSelector((store) => store.movie.nowPlayingMoviesList);
  if (moviesList === null) return;
  const randomIdx = randomIndex(moviesList.length);
  const movie = moviesList[randomIdx];
  const { title, overview, id } = movie;
  return (
    <>
      <main className="">
        <TrailerTitle title={title} overview={overview} />
        <Trailer movieId={id} />
      </main>
    </>
  );
};

export default PrimaryContainer;
