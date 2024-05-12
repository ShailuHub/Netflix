import { useSelector } from "react-redux";
import MovieListContainer from "./MovieListContainer";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import usePopularMovie from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovies";
import useUpComingMovie from "../hooks/useUpComingMovie";

const SecondaryContainer = () => {
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpComingMovie();
  const {
    nowPlayingMoviesList,
    popularMovieList,
    topRatedMovieList,
    upComingMovieList,
  } = useSelector((store) => store.movie);

  const movieSections = [
    { title: "Now Playing", movieList: nowPlayingMoviesList },
    { title: "Popular", movieList: popularMovieList },
    { title: "Top rated", movieList: topRatedMovieList },
    { title: "Upcoming", movieList: upComingMovieList },
  ];

  return (
    <section className="px-[2rem] bg-gradient-to-l relative z-30 flex flex-col  from-black via-gray-600 to-black space-y-6">
      {movieSections.map((section) => {
        return (
          <MovieListContainer
            key={section.title}
            movieList={section.movieList}
            listTitle={section.title}
          />
        );
      })}
    </section>
  );
};

export default SecondaryContainer;
