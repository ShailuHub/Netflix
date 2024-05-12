import Header from "../body/Header";
import { TMDB_OPTION, backGroundLogo, language } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { geminiModel } from "../../utils/geminiAi";
import { addRecommendedMovies } from "../../store/gptSlice";
import SuggestionVideoContainer from "../browse/SuggestionVideoContainer";

const Gpt = () => {
  const lang = useSelector((store) => store.config.lang);
  const searchRef = useRef();
  const dispatch = useDispatch();

  const getRecommendedMovie = async (movie) => {
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

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchText = searchRef.current.value;
    const prompt = `Recommend me 5 best movies based on the following text: ${searchText}. Please provide the movie names separated by commas. For example: "Tarzan, Zorro, Jungle Book, Massan, Gully Boy". Strictly give result in comma seperated format only otherwise won't give`;
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;

    const movies = response.text().split(/[#@,.&*]+/);
    const moviesPromise = movies.map((movie) => {
      return getRecommendedMovie(movie);
    });

    const tmdbResult = await Promise.all(moviesPromise);
    const combinedArray = movies.map((element, index) => {
      const obj = {};
      obj[element] = tmdbResult[index];
      return obj;
    });
    dispatch(addRecommendedMovies(combinedArray));
  };

  return (
    <>
      <Header />
      <main className="relative">
        <img
          src={backGroundLogo}
          alt="background-logo"
          className="w-full filter brightness-50 grayscale-70 h-[100vh] object-cover"
        />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] p-[2rem] bg-gradient-to-l from-black via-transparent to-black rounded-lg">
          <form action="" className="flex rounded-lg">
            <input
              ref={searchRef}
              type="text"
              placeholder={language[lang].gptSearchPlaceholder}
              className="w-full text-[1.8rem] px-[1rem] outline-none rounded-l-lg text-black"
            />
            <button
              className="bg-purple-700 text-[#ffffff] text-[2rem] py-[1rem] px-[2rem] rounded-r-lg"
              onClick={handleSearch}
            >
              {language[lang].gptSearchButton}
            </button>
          </form>
        </div>
      </main>
      <SuggestionVideoContainer />
    </>
  );
};

export default Gpt;
