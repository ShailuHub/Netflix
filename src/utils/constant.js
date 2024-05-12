export const TMDB_API_KEY = "da762fe1b6402f930aa2b0cc879b0589";

export const TMDB_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_TOKEN,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w300";

export const backGroundLogo =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_medium.jpg";

export const language = {
  en: {
    gptSearchPlaceholder: "what do you want to search...",
    buttonHomepage: "Homepage",
    buttonSignUp: "Sign Up",
    buttonSignIn: "Sign In",
    buttonSignOut: "Sign Out",
    gptSearchButton: "search",
    gptSearchHeaderButton: "GPT Search",
    langText: "Hindi",
  },
  hi: {
    gptSearchPlaceholder: "आप क्या खोजना चाहते हैं...",
    buttonSignUp: "साइन अप",
    buttonSignIn: "दाखिल करना",
    buttonHomepage: "मुखपृष्ठ",
    buttonSignOut: "साइन आउट",
    gptSearchButton: "खोज",
    gptSearchHeaderButton: "जीपीटी खोज",
    langText: "हिंदी",
  },
};
