import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="bg-green-500">
      <div className="md:w-1/2 h-40 bg-white">{children}</div>
    </div>
  );
}

export default AuthLayout;
