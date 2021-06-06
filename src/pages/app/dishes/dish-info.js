import React, { useEffect } from "react";
import img from "../../../assets/images/spag2.jpg";
import AppLayout from "../../../layouts/appLayout";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setActivePage,
} from "../../../store/actions/appActions";

function DishInfo(props) {
  const Dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <AppLayout page="dish info">
      <div>
        <div className="">
          <img src={img} alt="food" />
        </div>
        <div className="">
          <p>{}</p>
        </div>
      </div>
    </AppLayout>
  );
}

export default DishInfo;
