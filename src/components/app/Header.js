import React from "react";
import { MdPerson } from "react-icons/md";

function Header({ page }) {
  return (
    <header className="md:w-full h-14 p-4 shadow">
      <p>{page}</p>
      <div className="md:float-right md:w-2/5 items-center flex justify-around">
        <input
          className="border-solid border-gray border-2"
          type="search"
          placeholder="Enter keyword..."
        />
        <MdPerson size="20" className="cursor-pointer" color="green" />
      </div>
    </header>
  );
}

export default Header;
