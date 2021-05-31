import Dishes from "../../pages/app/dishes";
import Profile from "../../pages/app/profile";
import Tray from "../../pages/app/tray";
import Vendor from "../../pages/app/vendor";

const routes = [
  { name: "Dishes", path: "/dishes", component: Dishes },
  { name: "Profile", path: "/profile", component: Profile },
  { name: "Tray", path: "/tray", component: Tray },
  {
    name: "Vendor",
    path: "/vendor",
    component: Vendor,
  },
];
export default routes;
