import React, { useReducer } from "react";
import InputForm from "../../components/auth/InputForm";
import AuthLayout from "../../layouts/authLayout";

function Signup() {
  const initForms = {
    firstName: {
      name: "first-name",
      value: "",
      required: true,
      rules: [(v) => !!v || "First name is required"],
    },
    lastName: {
      name: "last-name",
      value: "",
      required: true,
      rules: [(v) => !!v || "Last name is required"],
    },
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
      value: "",
      type: "password",
      required: true,
      rules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 6 || "Password must not be less than 6 characters",
      ],
    },
    confirmPassword: {
      name: "confirm-password",
      value: "",
      type: "password",
      required: true,
      rules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 6 || "Password must not be less than 6 characters",
      ],
    },
  };

  const [forms, updateForm] = useReducer((forms, value, input) => {
    const formDup = { ...forms };
    formDup[input] = value;
    console.log(`[In signup page] new form is => ${forms}`);
    return formDup;
  }, initForms);

  return <InputForm forms={forms} updateForm={updateForm} mode="signup" />;
}

export default Signup;
