import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishes: [
    { dish: "Bread and Egg" },
    { dish: "Chicken and Chips" },
    { dish: "Beans and Dodo" },
    { dish: "Shawarma" },
    { dish: "Noodles and fried egg" },
    { dish: "Sandwich" },
    { dish: "Burger" },

    { dish: "Fried rice and chicken" },
    { dish: "Spaghetti and chicken" },
    { dish: "Yam and fried egg" },
    { dish: "Toast bread" },
  ],
  selectedDish: {},
};

const dishesSlice = createSlice({
  name: "Dishes",
  initialState,
  reducers: {
    setPageDish(state, { payload }) {
      state.dishes = payload;
    },

    setSelectedDish(state, { payload }) {
      state.selectedDish = payload;
      console.log("Set dish", payload);
      console.log(state);
    },
  },
});

const { reducer, actions } = dishesSlice;

export const { setPageDish, setSelectedDish } = actions;

export default reducer;
