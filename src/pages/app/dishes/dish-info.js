import React, { useEffect } from "react";
import img from "../../../assets/images/spag2.jpg";
import AppLayout from "../../../layouts/appLayout";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setActivePage,
} from "../../../store/actions/appActions";
import { setSelectedDish } from "../../../store/actions/dishActions";
import { useSelector } from "react-redux";

function DishInfo() {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(setCurrentPage("Dish Info"));
    Dispatch(setActivePage("Dishes"));
    setSelectedDish({ dish: "bread and egg" });
  }, [Dispatch]);
  const { selectedDish } = useSelector((state) => state.dish);
  return (
    <AppLayout page="dish info">
      <div className="h-screen">
        <div className="h-1/3">
          <img src={img} alt="food" className="w-full h-60 md:w-1/3" />
        </div>
        <div className="">
          <p>{selectedDish.dish}</p>
        </div>
      </div>
    </AppLayout>
  );
}

export default DishInfo;
