import React, { memo } from "react";
import InputForm from "../../components/auth/InputForm";
import AuthLayout from "../../layouts/authLayout";

function ForgotPassword() {
  const forms = {
    email: {
      name: "email",
      value: "",
      rules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "▲ E-mail must be valid",
      ],
    },
  };
  return (
    <AuthLayout>
      <InputForm forms={forms} mode="forgot-password" />
    </AuthLayout>
  );
}

export default memo(ForgotPassword);
