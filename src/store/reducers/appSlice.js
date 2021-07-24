import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "",
  active: "",
};

const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
      console.log(`set payload => ${payload}`);
    },
    setActivePage(state, { payload }) {
      state.active = payload;
      console.log(`set payload => ${payload}`);
    },
  },
});
const { reducer, actions } = AppSlice;
export const { setCurrentPage, setActivePage } = actions;

export default reducer;
