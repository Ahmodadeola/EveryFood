import Login from "../../pages/auth/login";
import Signup from "../../pages/auth/signup";

const routes = [
  { name: "login", path: "/login", component: <Login /> },
  { name: "sign up", path: "/signup", component: <Signup /> },
  {
    name: "forgot-password",
    path: "/forgot-password",
    component: "forgot-password",
  },
];
export default routes;
