import React, { memo } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import InputForm from "./InputForm";

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
      type: "password",
      required: true,
      rules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 6 || "Password must not be less than 6 characters",
      ],
    },
  };
  return <InputForm forms={forms} />;
}

export default memo(Login);
