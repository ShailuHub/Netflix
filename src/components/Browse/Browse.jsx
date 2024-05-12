import { useSelector } from "react-redux";
import Header from "../body/Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import Gpt from "../gpt/Gpt";

const Browse = () => {
  const showGptSerachView = useSelector((store) => store.gpt.showGptSerachView);
  return (
    <>
      <Header />
      {showGptSerachView ? (
        <Gpt />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
