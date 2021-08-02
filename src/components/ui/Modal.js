import React from "react";
import { animated, useSpring, config } from "@react-spring/web";
import BackDrop from "./BackDrop";

const Modal = ({ show = false, close = () => null, children }) => {
  const animationProps = useSpring({
    from: {
      opacity: 0,
      transform: show ? "translateY(-500px)" : "translateY(0)",
    },
    to: {
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(-500px)",
    },
    config: config.slow,
    delay: show ? 400 : 0,
  });

  return (
    <>
      <BackDrop show={show} close={close} />
      <animated.div
        style={animationProps}
        className="absolute flex justify-center pt-20 items-center z-30"
      >
        <div className="bg-white h-auto mx-auto max-w-md md:max-w-lg p-4">
          {children}
        </div>
      </animated.div>
    </>
  );
};

export default Modal;
