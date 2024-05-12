import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const Trailer = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movie.trailerVideoId);
  useTrailerVideo(movieId);
  return (
    <div className="w-full aspect-video relative">
      <div className="absolute bg-black opacity-60 z-10"></div>
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
