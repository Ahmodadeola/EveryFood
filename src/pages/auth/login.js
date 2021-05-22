import React from "react";
import useForm from "../../hooks/useForm";
import LoginComponent from "../../components/auth/login";
import AuthLayout from "../../layouts/authLayout";

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

  //   const Form = useForm(forms);
  return (
    <AuthLayout>
      Login Page
      <LoginComponent />
    </AuthLayout>
  );
}

export default Login;
