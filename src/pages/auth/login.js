import React from "react";
import InputForm from "../../components/auth/InputForm";
import AuthLayout from "../../layouts/authLayout";

function Login() {
  const forms = {
    email: {
      name: "email",
      value: "",
      rules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "▲ E-mail must be valid",
      ],
    },
    password: {
      name: "password",
      type: "password",
      value: "",
      required: true,
      rules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 6 || "Password must not be less than 6 characters",
      ],
    },
  };
  return (
    <AuthLayout>
      <InputForm forms={forms} />
    </AuthLayout>
  );
}

export default Login;
