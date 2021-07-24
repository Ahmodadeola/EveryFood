import Login from "../../pages/auth/login";
import Signup from "../../pages/auth/signup";
import ForgotPassword from "../../pages/auth/forgot-password";

const routes = [
  { name: "login", path: "login", component: Login },
  { name: "sign up", path: "signup", component: Signup },
  {
    name: "forgot-password",
    path: "forgot-password",
    component: ForgotPassword,
  },
];
export default routes;
