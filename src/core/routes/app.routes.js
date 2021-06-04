import Dishes from "../../pages/app/dishes/dishes";
import Profile from "../../pages/app/profile";
import Tray from "../../pages/app/tray";
import Vendor from "../../pages/app/vendor";
import DishInfo from "../../pages/app/dishes/dish-info";

const routes = [
  { name: "Dishes", path: "/dishes", component: Dishes },
  { name: "Profile", path: "/profile", component: Profile },
  { name: "Tray", path: "/tray", component: Tray },
  {
    name: "Vendor",
    path: "/vendor",
    component: Vendor,
  },
  {
    name: "DishInfo",
    path: "/dishes/dish-info",
    component: DishInfo,
  },
];
export default routes;
