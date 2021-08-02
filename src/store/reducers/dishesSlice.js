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
      id: "01",
      imgLink: SpagImg,
      price: 600,
      name: "Amala and Efo Riro",
      vendor: "Ola Ola Foods",
      scope: "Ogun",
    },
    {
      id: "02",
      imgLink: YamAndEgg,
      price: 600,
      name: "Yam and egg",
      vendor: "Ajoke Fast Food",
      scope: "Ogun",
    },
    {
      id: "03",
      imgLink: ChickenBurger,
      price: 1600,
      name: "Chicken Burger",
      vendor: "Vine restaurant",
      scope: "Lagos",
    },
    {
      id: "04",
      imgLink: GrilledSteak,
      price: 600,
      name: "Grilled steak with vegetables",
      vendor: "Mr. Biggs",
      scope: "Ebute Meta",
    },
    {
      id: "05",
      imgLink: Spag,
      price: 600,
      name: "Bread and Beans",
      vendor: "Ola Ola Foods",
      scope: "Ogun",
    },
    {
      id: "06",
      imgLink: SpagImg,
      price: 600,
      name: "Fried Rice and Chicken",
      vendor: "Iya moria buka",
      scope: "Ogun",
    },
    {
      id: "07",
      imgLink: Spag,
      price: 600,
      name: "Aganyin Beans and soft Dodo with chill coca-cola soft drink",
      vendor: "BukaHut Foods",
      scope: "Ebute Meta",
    },
    {
      id: "08",
      imgLink: ChickenAndChips,
      price: 1600,
      name: "Chicken and Chips",
      vendor: "MamaDee food",
      scope: "Lagos",
    },
    {
      id: "09",
      imgLink: Spag,
      price: 600,
      name: "Spagetti",
      vendor: "Ola Ola Foods",
      scope: "Ogun",
    },
    {
      id: "10",
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
      const dishId = payload.dish.id;
      let item = state.tray.find((item) => item.dish.id === dishId);
      if (item) item.quantity = payload.quantity;
      else state.tray.push(payload);
    },

    removeFromTray(state, { payload }) {
      const dishId = payload;
      state.tray = state.tray.filter((item) => item.dish.id !== dishId);
    },
  },
});

const { reducer, actions } = dishesSlice;

export const { setDishes, setSelectedDish, addToTray, removeFromTray } =
  actions;

export default reducer;
