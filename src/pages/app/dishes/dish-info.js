import React from "react";
import img from "../../../assets/images/spag2.jpg";

function DishInfo() {
  return (
    <div>
      <div className="">
        <img src={img} alt="food" />
      </div>
      <div className="">
        <p>{}</p>
      </div>
    </div>
  );
}

export default DishInfo;
