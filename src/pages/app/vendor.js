import React, { useEffect } from "react";
import AppLayout from "../../layouts/appLayout";
import { setActivePage, setCurrentPage } from "../../store/actions/appActions";
import { useDispatch } from "react-redux";

function Vendor() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Vendor"));
    dispatch(setActivePage("Vendor"));
  }, [dispatch]);
  return (
    <main>
      <p>This is the Vendor page</p>
    </main>
  );
}

export default Vendor;
