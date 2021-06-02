import React from "react";
import AppLayout from "../../layouts/appLayout";
import SpagImg from "../../assets/images/spag2.jpg";
import DishCard from "../../components/app/dishes/DishCard";

function Dishes() {
  const dishes = [
    { imgLink: SpagImg, price: 600, name: "Spagetti", scope: "Ogun" },
    { imgLink: SpagImg, price: 600, name: "Spagetti", scope: "Ogun" },
    {
      imgLink: SpagImg,
      price: 1600,
      name: "Chicken and Chips",
      scope: "Lagos",
    },
    { imgLink: SpagImg, price: 600, name: "Spagetti", scope: "Ogun" },
    {
      imgLink: SpagImg,
      price: 600,
      name: "Fried Rice and Chicken",
      scope: "Ogun",
    },
    {
      imgLink: SpagImg,
      price: 600,
      name: "Beans and Dodo",
      scope: "Ebute Meta",
    },
  ];
  return (
    <AppLayout page="dishes">
      <div className="p-6 w-full grid md:grid-cols-3 lg:grid-cols-4">
        {dishes.map((dish, idx) => (
          <DishCard {...dish} key={idx} />
        ))}
      </div>
    </AppLayout>
  );
}

export default Dishes;
