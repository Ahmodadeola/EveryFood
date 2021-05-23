import React from "react";
import InputForm from "../../components/auth/InputForm";
import AuthLayout from "../../layouts/authLayout";

function Signup() {
  const forms = {
    firstName: {
      name: "first-name",
      required: true,
      rules: [(v) => !!v || "First name is required"],
    },
    lastName: {
      name: "last-name",
      required: true,
      rules: [(v) => !!v || "First name is required"],
    },
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
    confirmPassword: {
      name: "confirm-password",
      type: "password",
      required: true,
      rules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 6 || "Password must not be less than 6 characters",
      ],
    },
  };
  return (
    <AuthLayout>
      <InputForm forms={forms} mode="signup" />
    </AuthLayout>
  );
}

export default Signup;
