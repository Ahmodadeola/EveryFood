import React from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../assets/css/app/DishCard.css";

function DishCard({ name, price, imgLink, scope, setupInfo = (f) => f }) {
  return (
    <Link to="/app/dishes/dish-info">
      <div
        onClick={setupInfo}
        className="dishcard-container relative md:mx-4 shadow border-2 border-solid 
    border-transparent hover:border-green-300 z-0 rounded mb-10 cursor-pointer bg-white"
      >
        <div className="card-img-container h-40">
          <img src={imgLink} alt={name} className="card-img w-full" />
        </div>

        <p className="text-auto text-gray-600 text-sm text-center">{name}</p>
        <div className="absolute -bottom-2 w-full">
          <div className="flex justify-between p-4 ">
            <p className="text-yellow-400 text-sm">
              <span>&#8358;</span>
              {price}
            </p>
            <div className="flex justify-around items-center space-x-1">
              <FaMapMarker size="10" className="inline-block text-green-400" />
              <p className="text-yellow-400 text-sm">{scope}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DishCard;
