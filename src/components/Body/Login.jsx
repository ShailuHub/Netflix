import { useState, useRef } from "react";
import { validateEmailAndPAssword } from "../../utils/validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

import { useDispatch, useSelector } from "react-redux";
import { toggleIsSignIn } from "../../store/userSlice";

const Login = () => {
  const isSignIn = useSelector((store) => store.user.isSignIn);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const fullNameRef = useRef();

  const handleOnToggle = () => {
    dispatch(toggleIsSignIn());
  };

  const handleOnFormSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const fullName = fullNameRef.current ? fullNameRef.current.value : null;
    const message = validateEmailAndPAssword(email, password);
    if (message) {
      setErrorMessage(message);
      return;
    }
    if (isSignIn) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[42rem] px-[6rem] py-[4rem] bg-black opacity-85 rounded-lg shadow-lg">
        <h2 className="text-[3rem] text-white mb-[4rem] py-[1rem] px-1 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form action="" className="flex flex-col space-y-8">
          {!isSignIn && (
            <input
              ref={fullNameRef}
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="p-5 text-[1.6rem] bg-[#101012] rounded-md border text-white border-gray-100 focus:outline-none focus:border-red-500"
            />
          )}
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email address"
            className="p-5 text-[1.6rem] bg-[#101012] rounded-md border text-white border-gray-100 focus:outline-none focus:border-red-500"
          />
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            className="p-5 text-[1.6rem] bg-[#101012] rounded-md border  text-white border-gray-100 focus:outline-none focus:border-red-500"
          />
          <button
            className="bg-[#C11119] py-[1rem] text-white text-[1.8rem] rounded-md"
            onClick={(e) => handleOnFormSubmit(e)}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-600 font-bold text-[1.6rem] mt-8 break-words">
            {errorMessage}
          </p>
        )}
        <p className="text-white text-[1.6rem] mt-8 py-[1rem]">
          {isSignIn ? "New to Netflix? " : "Already registered? "}
          <span className="font-bold cursor-pointer" onClick={handleOnToggle}>
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
