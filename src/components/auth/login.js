import React, { memo } from "react";
import Input from "./Input";

function Login() {
  return (
    <div className="max-w-md shodow-md">
      <form>
        <Input type="text" name="email" />
        <Input type="password" name="password" />
      </form>
    </div>
  );
}

export default memo(Login);
