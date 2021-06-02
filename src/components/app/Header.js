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
import SearchInput from "./SearchInput";
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
    <header className={`md:w-full ${!search && "p-4"} shadow`}>
      {!search ? (
        <div className="flex justify-between items-center">
          {/* Desktop view */}

          {/*icons for Mobile view*/}
          <FaBars
            size="20"
            onClick={() => toggle(true)}
            className="md:hidden text-green-400 cursor-pointer"
          />
          <p title="page" className="text-lg text-green-400 font-medium ml-6">
            {page[0].toUpperCase() + page.slice(1)}
          </p>
          <SearchInput />
          <FaSearch
            size="20"
            className="text-green-400 md:hidden cursor-pointer"
            onClick={() => toggleSearch(true)}
          />
          <MobileNavBar navLinks={navLinks} isOpen={open} setOpen={toggle} />
        </div>
      ) : (
        <SearchForm toggle={() => toggleSearch(false)} />
      )}
    </header>
  );
}

export default Header;
