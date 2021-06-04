import React from "react";
import { FaMapMarker } from "react-icons/fa";

function DishCard({ name, price, imgLink, scope }) {
  return (
    <div className="md:mx-4 shadow h-30 rounded mb-10 cursor-pointer bg-white">
      <img src={imgLink} alt={name} className="h-40 w-full" />
      <p className="text-auto text-gray-600 text-medium text-center">{name}</p>
      <div className="flex justify-between p-4">
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
  );
}

export default DishCard;
