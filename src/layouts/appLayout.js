import React from "react";
import NavBar from "../components/app/NavBar";
import Header from "../components/app/Header";

function AppLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="md:w-3/4 md:float-right">
        <Header />
      </div>

      <main className="w-full md:w-3/4 md:float-right">{children}</main>
    </>
  );
}

export default AppLayout;
