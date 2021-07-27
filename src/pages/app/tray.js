import React, { useEffect } from "react";
import { setActivePage, setCurrentPage } from "../../store/actions/appActions";
import { useDispatch } from "react-redux";
import { animated, useSpring, config } from "@react-spring/web";

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
  return (
    <animated.main style={props}>
      <p>This is the tray page</p>
    </animated.main>
  );
}

export default Tray;
