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
    <AppLayout page="vendor">
      <main>
        <p>This is the Vendor page</p>
      </main>
    </AppLayout>
  );
}

export default Vendor;
