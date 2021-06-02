import React, { memo } from "react";
import Input from "./Input";
import useForm from "../../hooks/useForm";

// Note: Do not pass functions that can cause rerender as prop to a component invoking it in a
// rerendering hook like useEffect, only pass memoized functions(using callback) in that scenerio

function InputForm({ forms, mode = "login" }) {
  // extract form states and functions
  const { setFormData, submitForm, valid } = useForm(mode);

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
    "forgot-password": {
      btnText: "Submit",
      headText: "Recover password",
      otherAuthText: "Back to ",
      otherAuthLink: "login",
    },
  };

  // extract page texts
  const { btnText, otherAuthLink, otherAuthText, headText } = modeProps[mode];

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
        {mode !== "forgot-password" && (
          <p className="text-sm font-bold text-gray-500">
            <a href={`/auth/forgot-password`} className="text-green-700 ml-1">
              forgot password
            </a>
          </p>
        )}
      </form>
    </div>
  );
}

export default memo(InputForm, () => true);
