import React, { useEffect } from "react";
import AppLayout from "../../../layouts/appLayout";
import SpagImg from "../../../assets/images/spag2.jpg";
import Spag from "../../../assets/images/spag.jpg";
import DishCard from "../../../components/app/dishes/DishCard";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setActivePage,
} from "../../../store/actions/appActions";

function Dishes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage("Dishes"));
    dispatch(setActivePage("Dishes"));
    console.log("called dispatch");
  }, [dispatch]);

  const dishes = [
    { imgLink: SpagImg, price: 600, name: "Spagetti", scope: "Ogun" },
    { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
    {
      imgLink: SpagImg,
      price: 1600,
      name: "Chicken and Chips",
      scope: "Lagos",
    },
    { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
    {
      imgLink: SpagImg,
      price: 600,
      name: "Fried Rice and Chicken",
      scope: "Ogun",
    },
    {
      imgLink: Spag,
      price: 600,
      name: "Beans and Dodo",
      scope: "Ebute Meta",
    },
    {
      imgLink: SpagImg,
      price: 1600,
      name: "Chicken and Chips",
      scope: "Lagos",
    },
    { imgLink: Spag, price: 600, name: "Spagetti", scope: "Ogun" },
    {
      imgLink: SpagImg,
      price: 600,
      name: "Fried Rice and Chicken",
      scope: "Ogun",
    },
    {
      imgLink: Spag,
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
