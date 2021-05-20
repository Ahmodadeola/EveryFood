import React from "react";
import { FaTimes } from "react-icons/fa";

const MobileNavBar = ({ isOpen = false, setOpen = (f) => f }) => {
  const mainClasses = `w-full h-7 left-0 top-0 absolute border-indigo-20 md:hidden transform
  transition ease-in duration-400`.split();
  isOpen
    ? mainClasses.push("translate-y-0")
    : mainClasses.push("-translate-y-96");
  return (
    <div className={mainClasses.join(" ")}>
      <ul className="flex flex-col bg-gray-800 z-3 text-green-500 p-6">
        <FaTimes size="30" onClick={() => setOpen(false)} className="ml-auto" />
        <li className="p-3">
          <a href="/#">Home</a>
        </li>
        <li className="p-3">
          <a href="/#">About</a>
        </li>
        <li className="p-3">
          <a href="/#">Login</a>
        </li>
        <li className="p-3">
          <a href="/#">Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavBar;
