import React, { useEffect } from "react";
import { setActivePage, setCurrentPage } from "../../store/actions/appActions";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring, config } from "@react-spring/web";
import TrayCard from "../../components/app/tray/TrayCard";
import {
  setSelectedDish,
  removeFromTray,
} from "../../store/reducers/dishesSlice";
import { Link } from "react-router-dom";

function Tray() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Tray"));
    dispatch(setActivePage("Tray"));
  }, [dispatch]);

  const props = useSpring({
    from: { opacity: 0, transform: "translateY(200px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: config.slow,
    delay: 600,
  });

  const { tray } = useSelector((state) => state.dish);
  const TrayContent = (
    <animated.div
      style={props}
      className="p-6 w-full grid md:grid-cols-3 lg:grid-cols-4"
    >
      {tray.map((item) => (
        <TrayCard
          {...item}
          key={item.dish.id}
          setupInfo={() => dispatch(setSelectedDish(item.dish))}
          removeItem={() => dispatch(removeFromTray(item.dish.id))}
        />
      ))}
    </animated.div>
  );
  const EmptyTray = (
    <div className="w-full">
      <h2 className="text-center mt-20 text-xl text-gray-600">
        Your tray is empty!
      </h2>
      <div className="w-full flex justify-center">
        <button className="btn btn-custom mt-3 mx-auto">
          <Link to="/app/dishes">Go To Dishes</Link>s
        </button>
      </div>
    </div>
  );

  return tray.length > 0 ? TrayContent : EmptyTray;
}

export default Tray;
