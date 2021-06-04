import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishes: [],
  selectedDish: null,
};

const dishesSlice = createSlice({
  name: "Dishes",
  initialState,
  reducers: {
    setPageDish(state, { dishes }) {
      state.dishes = dishes;
    },

    setSelectedDish(state, { dish }) {
      state.selectedDish = dish;
    },
  },
});

const { reducer, actions } = dishesSlice;

export const { setPageDish, setSelectedDish } = actions;

export default reducer;
