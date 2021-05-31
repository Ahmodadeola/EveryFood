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
    },
  ];
  return (
    <nav className="pl-3 md:absolute top-0 h-screen border-solid border-r-2 md:w-1/4">
      <ul className="invisible md:visible flex flex-col space-y-5">
        <h2 className="text-xl text-green-600 font-bold">EveryFood</h2>
        <NavItems
          items={navLinks}
          className="border-solid hover:border-left-2 px-3 py-4"
        />
      </ul>
    </nav>
  );
}

export default NavBar;
