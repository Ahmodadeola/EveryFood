import React from "react";
import NavBar from "../components/app/NavBar";
import Header from "../components/app/Header";

function AppLayout({ children, page }) {
  return (
    <>
      <NavBar active={page} />
      <div className="md:w-4/5 md:float-right">
        <Header page={page} />
      </div>

      <main className="w-full md:w-4/5 md:float-right bg-gray-100">
        {children}
      </main>
    </>
  );
}

export default AppLayout;
