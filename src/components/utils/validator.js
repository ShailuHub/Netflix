export const validateEmailAndPAssword = (email, password) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,11}$/;
  if (!emailRegex.test(email)) return "Email is not valid";
  if (password.length < 6) return "Password at least 6 characters long.";
  if (password.length > 11) return "Password of max characters 11.";
  if (!/[A-Z]/.test(password)) return "Password at least one capital letter.";
  if (!passwordRegex.test(password)) return "Password is not valid";
  return null;
};
