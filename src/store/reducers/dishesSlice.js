import { createSlice } from "@reduxjs/toolkit";
import SpagImg from "../../assets/images/spag2.jpg";
import Spag from "../../assets/images/spag.jpg";

const initialState = {
  dishes: [
    {
      imgLink: SpagImg,
      price: 600,
      name: "Spagetti",
      vendor: "Ola Ola Foods",
      scope: "Ogun",
    },
    {
      imgLink: Spag,
      price: 600,
      name: "Spagetti",
      vendor: "Ajoke Fast Food",
      scope: "Ogun",
    },
    {
      imgLink: SpagImg,
      price: 1600,
      name: "Chicken and Chips",
      vendor: "Vine restaurant",
      scope: "Lagos",
    },
    {
      imgLink: Spag,
      price: 600,
      name: "Spagetti",
      vendor: "Ola Ola Foods",
      scope: "Ogun",
    },
    {
      imgLink: SpagImg,
      price: 600,
      name: "Fried Rice and Chicken",
      vendor: "Iya moria buka",
      scope: "Ogun",
    },
    {
      imgLink: Spag,
      price: 600,
      name: "Beans and Dodo",
      vendor: "BukaHut Foods",
      scope: "Ebute Meta",
    },
    {
      imgLink: SpagImg,
      price: 1600,
      name: "Chicken and Chips",
      vendor: "MamaDee food",
      scope: "Lagos",
    },
    {
      imgLink: Spag,
      price: 600,
      name: "Spagetti",
      vendor: "Ola Ola Foods",
      scope: "Ogun",
    },
    {
      imgLink: SpagImg,
      price: 600,
      name: "Fried Rice and Chicken",
      vendor: "Fresh&Fast restaurant",
      scope: "Ogun",
    },
    {
      imgLink: Spag,
      price: 600,
      name: "Beans and Dodo",
      vendor: "Mr. Biggs",
      scope: "Ebute Meta",
    },
  ],
  selectedDish: null,
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
    },
  },
});

const { reducer, actions } = dishesSlice;

export const { setPageDish, setSelectedDish } = actions;

export default reducer;
