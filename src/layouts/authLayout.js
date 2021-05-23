import React from "react";
import Footer from "../components/home/footer";

function AuthLayout({ children }) {
  return (
    <>
      <div className="flex justify-center items-center bg-green-500 h-screen p-6">
        <div className="w-full h-full md:h-3/4 md:w-1/3 bg-white">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AuthLayout;
