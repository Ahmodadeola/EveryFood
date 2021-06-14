import React, { useEffect } from "react";
import AppLayout from "../../layouts/appLayout";
import { setActivePage, setCurrentPage } from "../../store/actions/appActions";
import { useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Profile"));
    dispatch(setActivePage("Profile"));
  }, [dispatch]);
  return (
    <AppLayout page="profile">
      <main>
        <p>This is the profile page</p>
      </main>
    </AppLayout>
  );
}

export default Profile;
