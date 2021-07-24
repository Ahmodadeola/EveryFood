import React from "react";
import { Link } from "react-router-dom";

function NavItems({ items, className }) {
  let allClasses = className;
  return (
    <>
      {items.map((item, idx) => {
        allClasses = item.addStyle
          ? allClasses.concat(" " + item.addStyle)
          : className;
        return (
          <Link to={item.link} key={idx}>
            <li className={allClasses}>
              {item.icon && (
                <item.icon
                  className={`inline-block ml-3 mr-5 ${
                    item.addStyle ? "text-indigo-500" : ""
                  }`}
                />
              )}
              <span>{item.title}</span>
            </li>
          </Link>
        );
      })}
    </>
  );
}

export default NavItems;
