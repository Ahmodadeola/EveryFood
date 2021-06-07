import React from "react";
import NavBar from "../components/app/NavBar";
import Header from "../components/app/Header";

function AppLayout({ children, page }) {
  return (
    <>
      <NavBar />
      <div className="md:w-4/5 md:float-right">
        <Header />
      </div>

      <main className="w-full md:w-4/5 md:float-right bg-gray-100 mt-10">
        {children}
      </main>
    </>
  );
}

export default AppLayout;
