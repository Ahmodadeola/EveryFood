import React from "react";

function Header({ page }) {
  return (
    <header className="md:w-3/4 ">
      <p>{page}</p>
      <input type="search" placeholder="Enter keyword..." />
    </header>
  );
}

export default Header;
