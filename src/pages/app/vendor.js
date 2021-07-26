import React, { useEffect } from "react";
import { setActivePage, setCurrentPage } from "../../store/actions/appActions";
import { useDispatch } from "react-redux";
import { animated, useSpring, config } from "@react-spring/web";

function Vendor() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Vendor"));
    dispatch(setActivePage("Vendor"));
  }, [dispatch]);
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(200px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: config.slow,
    delay: 400,
  });
  return (
    <animated.main style={props}>
      <p>This is the Vendor page</p>
    </animated.main>
  );
}

export default Vendor;
