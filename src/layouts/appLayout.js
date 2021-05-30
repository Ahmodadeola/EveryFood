import React from "react";
import NavBar from "../components/app/NavBar";
import Header from "../components/app/Header";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
}

export default AppLayout;
