import VideoCard from "./VideoCard";

const MovieListContainer = ({ movieList, listTitle }) => {
  return (
    <div className="w-full m-auto -mt-[20%]">
      <h2 className="font-bold text-[#ffffff] text-[2.5rem] mb-3 mt-3 px-5">
        {listTitle}
      </h2>
      <div className="flex w-full justify-start space-x-6 overflow-x-auto no-scrollbar">
        {movieList?.map((movie) => {
          const { poster_path, id } = movie;
          return <VideoCard key={id} poster_path={poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MovieListContainer;
