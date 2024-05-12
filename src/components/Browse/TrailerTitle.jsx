import { FaPlay } from "react-icons/fa";

const TrailerTitle = ({ title, overview }) => {
  return (
    <div className="pt-[12%] px-[8rem] w-full aspect-video absolute z-10">
      <div className="w-[40rem] flex flex-col space-y-10">
        <h2 className="font-bold text-[3rem] text-[#ffffff]">{title}</h2>
        <p className="text-[1.6rem] text-[#ffffff]">{overview}</p>
        <div className="flex space-x-4 mt-4">
          <button className="py-[1rem] px-[3rem] rounded-md shadow-md  flex space-x-5 items-center text-[2rem] border-none  bg-black opacity-70 text-white hover:opacity-75 transition-all">
            <span>
              <FaPlay />{" "}
            </span>
            <span className=" text-[#ffffff] ">Play</span>
          </button>
          <button className="py-[1rem] px-[3rem] rounded-md shadow-md  text-[2rem] border-none bg-black opacity-70 text-white">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerTitle;
