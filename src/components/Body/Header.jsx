import { Link } from "react-router-dom";
import assests from "../../assets";

const Header = () => {
  return (
    <header className="max-w-[124rem] bg-transparent m-auto py-[1rem] px-[4rem] absolute top-0 left-0 right-0 flex justify-between items-center z-10 bg-gradient-to-b from-black">
      <div>
        <img src={assests.logo} alt="logo" className="w-[20rem]" />
      </div>
      <div className="bg-[#C11119] text-white text-[1.6rem] px-5 py-2 rounded-md">
        <Link to={"/login"}>Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
