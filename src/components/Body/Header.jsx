import { useNavigate } from "react-router-dom";
import assests from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, toggleIsSignIn } from "../../store/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { toggleGptSerachView } from "../../store/gptSlice";
import { addLanguage } from "../../store/configSlice";
import { language } from "../../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const lang = useSelector((store) => store.config.lang);
  const isSignIn = useSelector((store) => store.user.isSignIn);
  const showGptSerachView = useSelector((store) => store.gpt.showGptSerachView);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        dispatch(
          addUser({ uid: uid, displayName: displayName, photoURL: photoURL })
        );
        navigate("/browse-movie");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleOnSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnGptSearch = () => {
    dispatch(toggleGptSerachView());
  };

  const handleOnLanguageSelect = (e) => {
    dispatch(addLanguage(e.target.value));
  };

  return (
    <header className="w-full bg-transparent m-auto py-[1rem] px-[5rem] absolute top-0 left-0 right-0 flex justify-between items-center z-20 ">
      <div>
        <img src={assests.logo} alt="logo" className="w-[15rem]" />
      </div>
      {!user ? (
        <div className="flex space-x-5">
          <select
            className="text-[1.6rem] px-5 outline-none bg-gray-600 text-[#ffffff] rounded-lg"
            onChange={handleOnLanguageSelect}
          >
            <option value="en" className="text-white">
              English
            </option>
            <option value="hi" className="text-white">
              {language[lang].langText}
            </option>
          </select>
          <button
            className="px-5 py-2 bg-[#C11119] text-white text-[1.6rem] rounded-md"
            onClick={() => dispatch(toggleIsSignIn())}
          >
            {isSignIn
              ? language[lang].buttonSignUp
              : language[lang].buttonSignIn}
          </button>
        </div>
      ) : (
        <div className="flex space-x-5">
          <select
            className="text-[1.6rem] px-5 outline-none bg-gray-600 text-[#ffffff] rounded-lg"
            onChange={handleOnLanguageSelect}
          >
            <option value="en" className="text-white">
              English
            </option>
            <option value="hi" className="text-white">
              {language[lang].langText}
            </option>
          </select>
          <button
            className="px-5 py-2 cursor-pointer bg-purple-600 text-white text-[1.6rem] rounded-md"
            onClick={handleOnGptSearch}
          >
            {showGptSerachView
              ? language[lang].buttonHomepage
              : language[lang].gptSearchHeaderButton}
          </button>
          <button
            className="px-5 py-2 cursor-pointer bg-[#C11119] text-white text-[1.6rem] rounded-md"
            onClick={handleOnSignOut}
          >
            {language[lang].buttonSignOut}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
