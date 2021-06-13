import React, { useEffect, useReducer } from "react";
import img from "../../../assets/images/spag2.jpg";
import AppLayout from "../../../layouts/appLayout";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setActivePage,
} from "../../../store/actions/appActions";
import { setSelectedDish } from "../../../store/actions/dishActions";
import { useSelector } from "react-redux";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

function DishInfo() {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(setCurrentPage("Dish Info"));
    Dispatch(setActivePage("Dishes"));
    setSelectedDish({ dish: "bread and egg" });
  }, [Dispatch]);
  const { selectedDish } = useSelector((state) => state.dish);
  const [unit, updateUnit] = useReducer(
    (unit, action = "increment") =>
      action === "increment" ? unit++ : unit > 0 ? unit-- : 0,
    1
  );
  return (
    <AppLayout page="dish info">
      <div className="h-screen md:mx-auto md:flex md:space-x-8 md:w-2/3 lg:w-3/5">
        <div className="md:w-1/2">
          <img src={img} alt="food" className="w-full h-60 md:w-full" />
        </div>
        <div className="md:w-1/2 p-4 md:p-auto">
          <h2 className="text-xl text-center text-green-500 mb-4 font-bold">
            {selectedDish.dish}
          </h2>
          <p className="leading-relaxed text-gray-600">
            Delicious and finely garnished aganyin beans with a tantalizing
            pepper stew at the top, enjoy every bits.
          </p>
          <div className="mx-auto w-full mt-4 text-green-400 tex-lg">
            <div className="flex justify-between mb-5">
              <p className="font-medium text-indigo-400">Vendor</p>
              <p>Yemi's restaurant</p>
            </div>
            <div className="flex justify-between mb-5">
              <p className="font-medium text-indigo-400">Unit Price</p>
              <p>&#8358;800</p>
            </div>
            <div className="flex justify-between mb-5">
              <p className="font-medium text-indigo-400">Units</p>
              <p>
                10
                <FaPlusCircle
                  size="24"
                  className="inline-block cursor-pointer ml-3"
                />
                <FaMinusCircle
                  size="24"
                  className="inline-block cursor-pointer ml-5"
                />
              </p>
            </div>
            <div className="flex justify-between mb-5">
              <p className="font-medium text-indigo-400">Total Price</p>
              <p>&#8358;800</p>
            </div>
            <div className="w-full flex justify-center">
              <button className="btn btn-custom">Add to tray</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default DishInfo;
