import React, { useEffect } from "react";
import DishCard from "../../../components/app/dishes/DishCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setActivePage,
} from "../../../store/actions/appActions";
import { setSelectedDish } from "../../../store/actions/dishActions";
import { animated, useSpring } from "@react-spring/web";

function Dishes() {
  const dispatch = useDispatch();

  const setupInfo = (dish) => {
    dispatch(setSelectedDish(dish));
  };

  useEffect(() => {
    dispatch(setCurrentPage("Dishes"));
    dispatch(setActivePage("Dishes"));
    console.log("called dispatch");
  }, [dispatch]);

  const { dishes } = useSelector((state) => state.dish);
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(200px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });
  return (
    <animated.div
      style={props}
      className="p-6 w-full grid md:grid-cols-3 lg:grid-cols-4"
    >
      {dishes.map((dish, idx) => (
        <DishCard {...dish} key={idx} setupInfo={() => setupInfo(dish)} />
      ))}
    </animated.div>
  );
}

export default Dishes;
