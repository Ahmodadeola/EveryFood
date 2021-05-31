import React from "react";
import NavItems from "../home/NavItems";

function NavBar() {
  const navLinks = [
    { title: "Dishes", link: "/app/dishes" },
    { title: "Tray", link: "/app/tray" },
    { title: "Profile", link: "/app/profile" },
    {
      title: "Vendor",
      link: "/app/vendor",
      addStyle:
        "transition ease-in duration-400 rounded p-3 font-bold hover:text-green-500 hover:bg-green-200 bg-green-500 text-white",
    },
  ];
  return (
    <nav className="md:absolute top-0 h-screen ">
      <ul className="flex flex-col space-y-5">
        <NavItems
          items={navLinks}
          className="border-solid hover:border-left-2 px-3 py-4"
        />
      </ul>
    </nav>
  );
}

export default NavBar;
