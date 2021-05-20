import React from "react";

function NavItems({ items, className }) {
  return (
    <>
      {items.map((item, idx) => {
        className = item.addStyle ? className.concat(item.addStyle) : className;
        return (
          <li className={className}>
            <a href={item.link}>{item.title}</a>
          </li>
        );
      })}
    </>
  );
}

export default NavItems;
