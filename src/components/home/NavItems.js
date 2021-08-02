import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavItems({ items, className, close = () => null }) {
  const { tray } = useSelector((state) => state.dish);
  let allClasses = className;
  return (
    <>
      {items.map((item, idx) => {
        allClasses = item.addStyle
          ? allClasses.concat(" " + item.addStyle)
          : className;
        allClasses += " relative";
        return (
          <Link to={item.link} key={idx} onClick={close}>
            <li className={allClasses}>
              {item.title === "Tray" && tray.length > 0 && (
                <span className="absolute flex items-center justify-center text-yellow-300 rounded-full h-5 w-5 top-1 text-xs font-bold bg-green-700">
                  {tray.length}
                </span>
              )}
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
