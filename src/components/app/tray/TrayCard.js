import React from "react";
import { FaMapMarker, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../assets/css/app/TrayCard.css";

function TrayCard({
  dish: { name, price, imgLink, scope },
  quantity,
  setupInfo = (f) => f,
  removeItem = () => null,
}) {
  name = name.length > 35 ? name.slice(0, 35) + "..." : name;
  return (
    <div
      onClick={setupInfo}
      className="traycard-container relative md:mx-4 shadow border-2 border-solid 
    border-transparent hover:border-green-300 z-0 rounded mb-10  bg-white"
    >
      <div className="card-img-container h-40">
        <img src={imgLink} alt={name} className="card-img w-full" />
      </div>

      <p className="text-auto text-gray-600 text-sm text-center mt-2 leading-3">
        {name}
      </p>
      <div className="absolute w-full -bottom-1">
        <div className="flex justify-between pb-1 px-2">
          <p className="text-yellow-400 text-sm md:text-xs">
            <span>&#8358;</span>
            {price}
          </p>
          <div className="flex justify-around items-center space-x-1">
            <FaMapMarker size="10" className="inline-block text-green-400" />
            <p className="text-yellow-400 text-xs">{scope}</p>
          </div>
        </div>
        <div className="flex justify-between pb-1 px-2 ">
          <p className="text-yellow-400 text-sm md:text-xs">
            {quantity} unit(s)
          </p>
          <p className="text-yellow-400 text-sm md:text-xs">
            <span>&#8358;</span>
            {price * quantity}
          </p>
        </div>
        <div className="flex justify-between pb-2 px-2">
          <Link to="/app/dishes/dish-info">
            <FaPen size="20" className="text-green-400" />
          </Link>
          <FaTrash
            size="20"
            className="text-green-400 cursor-pointer"
            onClick={removeItem}
          />
        </div>
      </div>
    </div>
  );
}

export default TrayCard;
