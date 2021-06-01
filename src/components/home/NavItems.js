import React from "react";

function NavItems({ items, className }) {
  let allClasses = className;
  return (
    <>
      {items.map((item, idx) => {
        allClasses = item.addStyle
          ? allClasses.concat(" " + item.addStyle)
          : className;
        return (
          <li className={allClasses} key={idx}>
            <a href={item.link}>{item.title}</a>
          </li>
        );
      })}
    </>
  );
}

export default NavItems;
