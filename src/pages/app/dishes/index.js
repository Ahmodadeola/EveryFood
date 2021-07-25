import React, { useEffect } from "react";
import DishCard from "../../../components/app/dishes/DishCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setActivePage,
} from "../../../store/actions/appActions";
import { setSelectedDish } from "../../../store/actions/dishActions";

function Dishes() {
  const dispatch = useDispatch();

  const setupInfo = (dish) => {
    dispatch(setSelectedDish(dish));
    console.log("Done setting");
  };

  useEffect(() => {
    dispatch(setCurrentPage("Dishes"));
    dispatch(setActivePage("Dishes"));
    console.log("called dispatch");
  }, [dispatch]);

  const { dishes } = useSelector((state) => state.dish);
  return (
    <div className="p-6 w-full grid md:grid-cols-3 lg:grid-cols-4">
      {dishes.map((dish, idx) => (
        <DishCard {...dish} key={idx} setupInfo={() => setupInfo(dish)} />
      ))}
    </div>
  );
}

export default Dishes;
