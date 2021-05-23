import React from "react";
import LoginComponent from "../../components/auth/login";
import AuthLayout from "../../layouts/authLayout";

function Login() {
  //   const Form = useForm(forms);
  return (
    <AuthLayout>
      <LoginComponent />
    </AuthLayout>
  );
}

export default Login;
