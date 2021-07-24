import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNavBar from "./MobileNavBar";
import BackDrop from "../ui/BackDrop";
import NavItems from "./NavItems";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Login", link: "/auth/login" },
    {
      title: "Sign Up",
      link: "/auth/signup",
      addStyle:
        "transition ease-in duration-400 rounded p-3 font-bold hover:text-green-500 hover:bg-green-200 bg-green-500 text-white",
    },
  ];

  const mobileLinks = navLinks
    .slice(0, 3)
    .concat({ title: "Sign up", link: "/auth/signup" });
  return (
    <header className="text-green-500 z-0 mb-5 fixed bg-white w-full top-0">
      <BackDrop show={isOpen} close={() => setOpen(!isOpen)} />
      <nav className="shadow-md flex items-center p-4">
        <div className="ml-3 md:ml-2 md:text-left">
          <h2 className="text-left text-xl font-bold">EveryFood</h2>
          <span className="text-xs text-gray-600">
            Where food lovers meet food makers
          </span>
        </div>
        <ul className="hidden md:flex ml-auto justify-around">
          <NavItems items={navLinks} className="mr-6 inline-block p-3" />
        </ul>
        <FaBars
          size="30"
          onClick={() => setOpen(!isOpen)}
          className="ml-auto md:hidden text-green-500 cursor-pointer"
        />
        <MobileNavBar
          setOpen={setOpen}
          isOpen={isOpen}
          navLinks={mobileLinks}
        />
      </nav>
    </header>
  );
}

export default Header;
