import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import Input from "./Input";
import useForm from "../../hooks/useForm";

// Note: Do not pass functions that can cause rerender as prop to a component invoking it in a
// rerendering hook like useEffect, only pass memoized functions(using callback) in that scenerio

function InputForm({ forms, mode = "login" }) {
  // stores value for all form inputs
  const [_formData, _setFormData] = useReducer(
    (data, { key, value, valid }) => {
      const dataDup = { ...data };
      dataDup[key] = { value, valid };
      return dataDup;
    },
    {}
  );

  const [valid, setValid] = useState(false);

  // memoized form data object
  const formData = useMemo(() => {
    return { ..._formData };
  }, [_formData]);

  useEffect(() => {
    let _valid = true;
    Object.values(formData).forEach((data) => {
      _valid = _valid && data.valid;
      console.log(
        `[In InputForm] _valid => ${_valid}, data is => ${data.valid}`
      );
    });
    setValid(_valid);
    console.log(`[In InputForm] ${JSON.stringify(formData)}, ${_valid}`);
  }, [formData]);

  // memoized setFormData
  const setFormData = useCallback(
    (key, value, valid) => {
      _setFormData({ key, value, valid });
      console.log(`[in useCallback] key => ${key}, value=> ${value}`);
    },
    [_setFormData]
  );

  // page texts in object
  const modeProps = {
    login: {
      btnText: "Login",
      otherAuthLink: "signup",
      otherAuthText: "Don't have an account yet?",
      headText: "User Login",
    },
    signup: {
      btnText: "Submit",
      otherAuthLink: "login",
      otherAuthText: "Have an account already?",
      headText: "Create account",
    },
  };

  // extract page texts
  const { btnText, otherAuthLink, otherAuthText, headText } = modeProps[mode];

  // submit form handler
  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="py-8 h-full text-center">
      <h2 className="ml-3 text-green-500 font-bold mb-5">EveryFood</h2>
      <h3 className="text-green-700 text-xl font-medium">{headText}</h3>
      <form className="flex flex-col space-y-4 items-center h-1/2 md:h-2/3 m-5">
        {Object.entries(forms).map(([key, value], idx) => (
          <Input
            type={key}
            name={key}
            config={value}
            className="my-16"
            setValue={setFormData}
            key={idx}
          />
        ))}
        <button
          disabled={!valid}
          className="btn-custom mx-auto disabled:bg-green-100 disabled:cursor-none"
          onClick={submitForm}
        >
          {btnText}
        </button>
        <p className="text-sm font-bold text-gray-500">
          {otherAuthText}
          <a href={`/auth/${otherAuthLink}`} className="text-green-700 ml-1">
            {otherAuthLink}
          </a>
        </p>
      </form>
    </div>
  );
}

export default memo(InputForm, () => true);
