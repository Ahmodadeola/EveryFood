import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import dishReducer from "./reducers/dishesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    dish: dishReducer,
  },
});

export default store;
