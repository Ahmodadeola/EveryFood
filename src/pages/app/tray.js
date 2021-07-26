import React, { useEffect } from "react";
import AppLayout from "../../layouts/appLayout";
import { setActivePage, setCurrentPage } from "../../store/actions/appActions";
import { useDispatch } from "react-redux";
function Tray() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Tray"));
    dispatch(setActivePage("Tray"));
  }, [dispatch]);
  return (
    <main>
      <p>This is the tray page</p>
    </main>
  );
}

export default Tray;
