import React from "react";

function DishCard({ name, price, imgLink, scope }) {
  return (
    <div className="md:mx-4 shadow h-30 rounded mb-10">
      <img src={imgLink} alt={name} className="h-40 w-full" />
      <p className="text-auto text-gray-600 text-medium text-center">{name}</p>
      <div className="flex justify-between p-4">
        <p className="text-yellow-400 text-sm">N{price}</p>
        <p className="text-yellow-400 text-sm">{scope}</p>
      </div>
    </div>
  );
}

export default DishCard;
