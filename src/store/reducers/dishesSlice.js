import { createSlice } from "@reduxjs/toolkit";
import SpagImg from "../../assets/images/spag2.jpg";
import Spag from "../../assets/images/spag.jpg";
import ChickenBurger from "../../assets/images/chicken-burger.jpg";
import YamAndEgg from "../../assets/images/yam-and-egg.jpg";
import GrilledSteak from "../../assets/images/grilled-steak.jpg";
import ChickenAndChips from "../../assets/images/chicken-and-chips.jpg";

const initialState = {
  dishes: [
    {
      imgLink: SpagImg,
      price: 600,
      name: "Amala and Efo Riro",
      vendor: "Ola Ola Foods",
      scope: "Ogun",
    },
    {
      imgLink: YamAndEgg,
      price: 600,
      name: "Yam and egg",
      vendor: "Ajoke Fast Food",
      scope: "Ogun",
    },
    {
      imgLink: ChickenBurger,
      price: 1600,
      name: "Chicken Burger",
      vendor: "Vine restaurant",
      scope: "Lagos",
    },
    {
      imgLink: GrilledSteak,
      price: 600,
      name: "Grilled steak with vegetables",
      vendor: "Mr. Biggs",
      scope: "Ebute Meta",
    },
    {
      imgLink: Spag,
      price: 600,
      name: "Bread and Beans",
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
      imgLink: ChickenAndChips,
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
  ],
  selectedDish: null,
  tray: [],
};

const dishesSlice = createSlice({
  name: "Dishes",
  initialState,
  reducers: {
    setDishes(state, { payload }) {
      state.dishes = payload;
    },

    setSelectedDish(state, { payload }) {
      state.selectedDish = payload;
    },

    setTray(state, { payload }) {
      state.tray = payload;
    },

    addToTray(state, { payload }) {
      state.tray.push(payload);
    },
  },
});

const { reducer, actions } = dishesSlice;

export const { setDishes, setSelectedDish, addToTray } = actions;

export default reducer;
