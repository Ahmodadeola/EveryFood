import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import dishReducer from "./reducers/dishesSlice";
import appReducer from "./reducers/appSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    dish: dishReducer,
    app: appReducer,
  },
});

export default store;
