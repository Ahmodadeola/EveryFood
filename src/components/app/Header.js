import React, { useState } from "react";
import { MdPerson, mdiFoo } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import {
  FaBars,
  FaSearch,
  FaShoppingBasket,
  FaUtensils,
  FaUserTie,
} from "react-icons/fa";
import SearchForm from "./SearchForm";
import MobileNavBar from "../home/MobileNavBar";

function Header({ page }) {
  const [open, toggle] = useState(false);
  const [search, toggleSearch] = useState(false);

  const navLinks = [
    { title: "Dishes", link: "/app/dishes", icon: FaUtensils },
    { title: "Tray", link: "/app/tray", icon: FaShoppingBasket },
    { title: "Profile", link: "/app/profile", icon: FaUserTie },
    {
      title: "Vendor",
      link: "/app/vendor",
      icon: AiFillShop,
    },
  ];
  return (
    <header className="md:w-full h-14 p-4 shadow">
      {!search ? (
        <div className="flex justify-between items-center">
          <FaBars
            size="20"
            onClick={() => toggle(true)}
            className="md:hidden text-green-400"
          />
          <p title="page" className="text-lg text-green-400 font-medium ml-6">
            {page[0].toUpperCase() + page.slice(1)}
          </p>
          <FaSearch
            size="20"
            className="text-green-400 md:hidden"
            onClick={() => toggleSearch(true)}
          />
          <MobileNavBar navLinks={navLinks} isOpen={open} setOpen={toggle} />
        </div>
      ) : (
        <SearchForm />
      )}
      {/* <div className="md:float-right md:w-2/5 items-center flex justify-around">
        <input
          className="border-solid border-gray border-2"
          type="search"
          placeholder="Enter keyword..."
        />
        <MdPerson size="20" className="cursor-pointer" color="green" />
      </div> */}
    </header>
  );
}

export default Header;
