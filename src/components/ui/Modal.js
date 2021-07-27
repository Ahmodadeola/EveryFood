import React from "react";
import { animated, useSpring, config } from "@react-spring/web";
import BackDrop from "./BackDrop";

const Modal = ({ show = false, close = () => null, children }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(-200px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.slow,
    delay: 400,
  });
  if (!show) return null;
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <BackDrop show={show} close={close} />
      <animated.div
        style={props}
        className="bg-white h-auto max-w-md md:max-w-lg z-20 p-4"
      >
        {children}
      </animated.div>
    </div>
  );
};

export default Modal;
