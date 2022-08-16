import { useState } from "react";

const useInputValidation = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
    message: "",
  });

  const setEmail = (event) => {
    setEnteredEmail(event.target.value);
  };

  const setPassword = (event) => {
    setEnteredPassword(event.target.value);
  };

  const isValid = (email, password) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email || !email.includes("@") || !email.match(validRegex)) {
      return {
        emailError: true,
        passwordError: false,
        message: "Email is incorrect.",
      };
    } else if (
      !password ||
      password.trim() === "" ||
      password.trim().length < 9 ||
      !/\d/.test(password)
    ) {
      return {
        emailError: false,
        passwordError: true,
        message: "Password is incorrect.",
      };
    }
    return {
      emailError: false,
      passwordError: false,
      message: "",
    };
  };

  return {
    email: enteredEmail,
    password: enteredPassword,
    setEmail,
    setPassword,
    error,
    setError,
    isValid,
  };
};

export default useInputValidation;
