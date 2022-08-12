import { useState } from "react";

const useTextareaValidation = (validateValue) => {
  const [entredValue, setEntredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(entredValue);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEntredValue(e.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEntredValue("");
    setIsTouched(false);
  };

  return {
    value: entredValue,
    isValid: valueIsValid,
    error: hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useTextareaValidation;
