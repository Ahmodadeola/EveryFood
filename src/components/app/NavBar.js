import React from "react";
import NavItems from "../home/NavItems";

function NavBar({ active }) {
  const navLinks = [
    { title: "Dishes", link: "/app/dishes" },
    { title: "Tray", link: "/app/tray" },
    { title: "Profile", link: "/app/profile" },
    {
      title: "Vendor",
      link: "/app/vendor",
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
    <nav className="hidden md:block absolute top-0 h-screen border-solid border-r-2 md:w-1/5">
      <ul className="invisible md:visible flex flex-col py-6 space-y-5">
        <h2 className="text-2xl ml-2 text-green-600 font-bold pb-20">
          EveryFood
        </h2>
        <NavItems
          items={navLinks}
          className="text-md font-medium text-gray-500 border-solid border-white border-r-4 hover:text-indigo-500 hover:bg-indigo-100 p-3"
        />
      </ul>
    </nav>
  );
}

export default NavBar;
