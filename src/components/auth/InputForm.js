import React, { memo } from "react";
import Input from "./Input";

function Login({ forms, mode = "login" }) {
  //   const forms = {
  //     email: {
  //       name: "email",
  //       rules: [
  //         (v) => !!v || "Email is required",
  //         (v) => /.+@.+\..+/.test(v) || "▲ E-mail must be valid",
  //       ],
  //     },
  //     password: {
  //       name: "password",
  //       required: true,
  //       rules: [
  //         (v) => !!v || "Password is required",
  //         (v) => v.length > 6 || "Password must not be less than 6 characters",
  //       ],
  //     },
  //   };
  const btnText = mode === "login" ? "Login" : "Submit";
  const otherAuthText =
    mode === "login"
      ? "Don't have an account yet?"
      : "Have an existing account?";
  const otherAuthLink = mode === "login" ? "signup" : "login";
  return (
    <div className="py-8 h-full text-center">
      <h2 className="text-green-500 text-xl font-bold">{mode}</h2>
      <form className="flex flex-col space-y-4 items-center h-1/2 md:h-2/3 m-5">
        {Object.entries(forms).map(([key, value], idx) => (
          <Input
            type={key}
            name={key}
            config={value}
            className="my-16"
            key={idx}
          />
        ))}
        <button className="btn-custom mx-auto">{btnText}</button>
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

export default memo(Login);
