import React from "react";
import { animated, useSpring, config } from "@react-spring/web";
import BackDrop from "./BackDrop";

const Modal = ({ show = false, close = () => null, children }) => {
  const props = useSpring({
    from: {
      opacity: show ? 0 : 1,
      transform: show ? "translateY(-200px)" : "translateY(0)",
    },
    to: {
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "transalateY(-200px)",
    },
    config: config.slow,
    delay: show ? 800 : 100,
  });
  return (
    <animated.div
      style={props}
      className="absolute flex justify-center items-center z-30"
    >
      <BackDrop show={show} close={close} />
      <animated.div
        style={props}
        className="bg-white h-auto mt-28 max-w-md md:max-w-lg z-20 p-4"
      >
        {children}
      </animated.div>
    </animated.div>
  );
};

export default Modal;
