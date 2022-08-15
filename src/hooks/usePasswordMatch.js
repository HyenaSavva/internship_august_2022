import { useState } from "react";

const usePasswordMatch = () => {
  const [password, setPassword] = useState("");
  const [secondPass, setSecondPass] = useState("");
  const [error, setError] = useState("");
  const [secondError, setSecondError] = useState({});

  const setPass = (event) => {
    setPassword(event.target.value);
  };

  const setSecPass = (event) => {
    setSecondPass(event.target.value);
  };

  const passwordsMatch = () => {
    const errorBlank = {
      emailError: false,
      passwordError: true,
      message: "At least 8 characters and one number.",
    };
    const doNotMatch = {
      emailError: false,
      passwordError: true,
      message: "Passwords do not match.",
    };

    if (
      !password ||
      password.trim() === "" ||
      password.trim().length < 9 ||
      !/\d/.test(password) ||
      !secondPass ||
      secondPass.trim() === "" ||
      secondPass.trim().length < 9 ||
      !/\d/.test(secondPass)
    ) {
      setError(errorBlank);
      setSecondError(doNotMatch);
      return;
    }
    if (password !== secondPass) {
      setError(errorBlank);
      setSecondError(doNotMatch);
      return;
    }
    setError({});
    setSecondError({});
  };
  return {
    error,
    secondError,
    setPass,
    setSecPass,
    passwordsMatch,
  };
};

export default usePasswordMatch;
