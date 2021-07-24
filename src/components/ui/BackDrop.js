import React from "react";

const BackDrop = ({ show, close = () => null }) =>
  show ? (
    <div
      onClick={close}
      className="fixed left-0 top-0 w-screen h-screen bg-gray-800 opacity-70 z-2"
    ></div>
  ) : null;

export default BackDrop;
