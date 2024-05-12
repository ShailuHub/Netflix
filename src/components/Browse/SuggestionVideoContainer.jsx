import { useSelector } from "react-redux";
import MovieListContainer from "./MovieListContainer";

const SuggestionVideoContainer = () => {
  const recommendedMovies = useSelector((store) => store.gpt.recommendedMovies);
  return (
    <>
      <section className="px-[2rem] bg-gradient-to-l relative z-30 flex flex-col  from-black via-gray-600 to-black space-y-6">
        {recommendedMovies?.map((suggestedMovie) => {
          const [[key, value]] = Object.entries(suggestedMovie);
          console.log(key, value);
          return (
            <MovieListContainer key={key} movieList={value} listTitle={key} />
          );
        })}
      </section>
    </>
  );
};

export default SuggestionVideoContainer;
