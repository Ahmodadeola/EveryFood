import React from "react";
import useForm from "../../hooks/useForm";

function Login() {
  const forms = {
    email: {
      rules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "▲ E-mail must be valid",
      ],
    },
    password: {
      required: true,
      rules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 6 || "Password must not be less than 6 characters",
      ],
    },
  };

  const Form = useForm(forms);
  return <Form />;
}

export default Login;
