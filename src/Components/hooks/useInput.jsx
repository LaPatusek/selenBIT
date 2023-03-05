<<<<<<< HEAD
import { useState } from "react";

const useInput = (validateValue) =>
{
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };
    
      const inputBlurHandler = (event) => {
        setIsTouched(true);
      };

      const reset = () =>
      {
        setEnteredValue('');
        setIsTouched(false)
      }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
}

=======
import { useState } from "react";

const useInput = (validateValue) =>
{
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };
    
      const inputBlurHandler = (event) => {
        setIsTouched(true);
      };

      const reset = () =>
      {
        setEnteredValue('');
        setIsTouched(false)
      }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
}

>>>>>>> 90d1ffcace57f94e7767c3448206fd5f0c8b7765
export default useInput;