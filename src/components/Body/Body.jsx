import { Outlet } from "react-router-dom";
import Header from "./Header";
import { backGroundLogo } from "../../utils/constant";

const Body = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <img
          src={backGroundLogo}
          alt="background-logo"
          className="w-full filter brightness-50 grayscale-70"
        />
        <Outlet />
      </main>
    </>
  );
};

export default Body;
