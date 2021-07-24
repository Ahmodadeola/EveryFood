import React, { useEffect, useReducer } from "react";
import img from "../../../assets/images/spag2.jpg";
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
    window.scrollTo(0, 0);
  }, [Dispatch]);
  const { selectedDish } = useSelector((state) => state.dish);
  const [units, updateUnit] = useReducer(
    (unit, action = "increment") =>
      action === "increment" ? ++unit : unit > 0 ? --unit : 0,
    1
  );
  return (
    <div className="md:mx-auto md:flex md:space-x-8 md:w-5/6 lg:w-3/5">
      <div className="md:w-1/2">
        <img
          src={img}
          alt="food"
          className="w-full h-60 md:h-80 md:w-full md:mt-5"
        />
      </div>
      <div className="md:w-1/2 p-4 md:p-auto">
        <h2 className="bg-green-400 p-2 text-xl text-center text-white mb-4 font-bold">
          {selectedDish.name}
        </h2>
        <p className="text-gray-600 md:text-base text-sm">
          Delicious and finely garnished aganyin beans with a tantalizing pepper
          stew at the top, enjoy every bits.
        </p>
        <div className="font-medium text-sm md:text-base mx-auto w-full mt-4 text-green-400">
          <div className="flex justify-between mb-3">
            <p className=" text-indigo-400">Vendor</p>
            <p>{selectedDish.vendor}</p>
          </div>

          <div className="flex justify-between mb-3">
            <p className=" text-indigo-400">Location</p>
            <p>{selectedDish.scope}</p>
          </div>

          <div className="flex justify-between mb-3">
            <p className=" text-indigo-400">Unit Price</p>
            <p>&#8358;{selectedDish.price}</p>
          </div>
          <div className="flex justify-between mb-3">
            <p className=" text-indigo-400">Units</p>
            <p>
              {units}
              <FaPlusCircle
                onClick={() => updateUnit("increment")}
                size="24"
                className="inline-block cursor-pointer ml-3"
              />
              <FaMinusCircle
                onClick={() => updateUnit("decrement")}
                size="24"
                className="inline-block cursor-pointer ml-5"
              />
            </p>
          </div>
          <div className="flex justify-between mb-3">
            <p className=" text-indigo-400">Total Price</p>
            <p>&#8358;{units * selectedDish.price}</p>
          </div>
          <div className="w-full flex justify-center">
            <button
              disabled={units === 0}
              className="btn btn-custom disabled:bg-transparent"
            >
              Add to tray
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishInfo;
