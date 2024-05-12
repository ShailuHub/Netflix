import { IMG_URL } from "../../utils/constant";

const VideoCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="min-w-[25rem] h-[25rem] rounded-lg overflow-hidden">
      <img
        src={`${IMG_URL}${poster_path}`}
        alt="Poster image"
        className=" w-full h-full"
      />
    </div>
  );
};

export default VideoCard;
