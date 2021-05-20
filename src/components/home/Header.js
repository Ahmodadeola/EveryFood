import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNavBar from "./MobileNavBar";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="text-green-500 z-0">
      <nav className="shadow-md flex items-center p-4">
        <div className="ml-3 md:ml-2 md:text-left">
          <h2 className="text-left text-xl font-bold">EveryFood</h2>
          <span className="text-sm text-gray-700">
            Where food lovers meet food makers
          </span>
        </div>
        <ul className="hidden md:flex ml-auto justify-around">
          <li className="mr-6 inline-block p-3">
            <a href="/#">Home</a>
          </li>
          <li className="mr-6 inline-block p-3">
            <a href="/#">About</a>
          </li>
          <li className="mr-6 inline-block p-3">
            <a href="/#">Login</a>
          </li>
          <li className="transition ease-in duration-400 mr-6 inline-block rounded p-3 font-bold hover:text-green-500 hover:bg-green-200 bg-green-400 text-white">
            <a href="/#">Sign Up</a>
          </li>
        </ul>
        <FaBars
          size="30"
          onClick={() => setOpen(!isOpen)}
          className="ml-auto md:hidden text-green-500"
        />
        <MobileNavBar setOpen={setOpen} isOpen={isOpen} />
      </nav>
    </header>
  );
}

export default Header;
