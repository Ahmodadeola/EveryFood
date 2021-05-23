import React, { memo } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

function Login() {
  const forms = {
    email: {
      name: "email",
      rules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "▲ E-mail must be valid",
      ],
    },
    password: {
      name: "password",
      required: true,
      rules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 6 || "Password must not be less than 6 characters",
      ],
    },
  };
  return (
    <div className="py-8 h-full">
      <h2 className="text-green-500 text-center text-xl">EveryFood | Login</h2>
      <form className="flex flex-col justify-around items-center h-1/2 m-5">
        <Input type="text" name="email" config={forms.email} />
        <Input type="password" name="password" config={forms.password} />
        <button className="btn-custom mx-auto">Login</button>
        <p className="text-md text-indigo-500">
          Don't have an account yet?{" "}
          <a href="/auth/signup" className="text-green-700">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default memo(Login);
