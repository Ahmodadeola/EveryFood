import React, { useState } from "react";
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
import BackDrop from "../ui/BackDrop";
import { useSelector } from "react-redux";

function Header() {
  const [open, toggle] = useState(false);
  const [search, toggleSearch] = useState(false);
  const { currentPage } = useSelector((state) => state.app);

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
    <>
      <BackDrop show={open} close={() => toggle(!open)} />
      <header
        className={`md:w-4/5 ${!search && "p-4"} fixed shadow bg-white w-full`}
      >
        {!search ? (
          <div className="flex justify-between items-center relative">
            {/* Desktop view */}

            {/*icons for Mobile view*/}
            <FaBars
              size="20"
              onClick={() => toggle(true)}
              className="md:hidden text-green-400 cursor-pointer"
            />
            <p
              title="currentPage"
              className="text-lg text-green-400 font-medium ml-6"
            >
              {currentPage &&
                currentPage[0].toUpperCase() + currentPage.slice(1)}
            </p>
            <SearchInput />
            <FaSearch
              size="20"
              className="text-green-400 md:hidden cursor-pointer"
              onClick={() => toggleSearch(true)}
            />
          </div>
        ) : (
          <SearchForm toggle={() => toggleSearch(false)} />
        )}
      </header>
      <MobileNavBar navLinks={navLinks} isOpen={open} setOpen={toggle} />
    </>
  );
}

export default Header;
