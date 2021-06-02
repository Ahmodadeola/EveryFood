import React from "react";

function NavItems({ items, className }) {
  let allClasses = className;
  return (
    <>
      {items.map((item, idx) => {
        allClasses = item.addStyle
          ? allClasses.concat(" " + item.addStyle)
          : className;
        console.log(item.icon);
        return (
          <a href={item.link} key={idx}>
            <li className={allClasses}>
              {item.icon && (
                <item.icon
                  className={`inline-block ml-3 mr-5 ${
                    item.addStyle && "text-indigo-500"
                  }`}
                />
              )}
              {item.title}
            </li>
          </a>
        );
      })}
    </>
  );
}

export default NavItems;
