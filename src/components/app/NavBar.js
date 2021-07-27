import React from "react";
import NavItems from "../home/NavItems";
import { FaUtensils, FaShoppingBasket, FaUserTie } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { useSelector } from "react-redux";
import Logo from "../ui/Logo";

function NavBar() {
  const { active } = useSelector((state) => state.app);
  const navLinks = [
    { title: "Dishes", link: "/app/dishes", icon: FaUtensils },
    { title: "Tray", link: "/app/tray", icon: FaShoppingBasket },
    { title: "Profile", link: "/app/profile", icon: FaUserTie },
    {
      title: "Vendor",
      link: "/app/vendor",
      icon: AiFillShop,
    },
  ].map((link) => {
    if (link.title.toLowerCase() === active.toLowerCase())
      return {
        ...link,
        addStyle: "text-green-500 border-green-500 bg-indigo-100",
      };
    return link;
  });

  return (
    <nav className="hidden md:block fixed top-0 h-screen border-solid border-r-2 md:w-1/5">
      <ul className="invisible md:visible flex flex-col py-6 space-y-5">
        <div className="ml-6">
          <Logo />
        </div>
        <div className="mt-48"></div>
        <NavItems
          items={navLinks}
          className="text-md cursor-pointer font-medium text-gray-500 border-solid border-white border-r-4 hover:text-indigo-500 hover:bg-indigo-100 p-3"
        />
      </ul>
    </nav>
  );
}

export default NavBar;
