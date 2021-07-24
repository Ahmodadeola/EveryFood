import "./App.css";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import ProtectedRoute from "./core/routes/ProtectedRoute";
import AppRoutes from "./core/routes/app.routes";
import AuthRoutes from "./core/routes/auth.routes";
import DishDetails from "./pages/app/dishes/dish-info";
import Home from "./pages/index";
import AuthLayout from "./layouts/authLayout";
import AppLayout from "./layouts/appLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <ProtectedRoute
          path="/app"
          condition={true}
          component={AppLayout}
          redirectPathname="/home"
        />
        <ProtectedRoute
          path={`/auth`}
          condition={true}
          component={AuthLayout}
          redirectPathname="/auth"
        />

        {/* {AuthRoutes.map((route, idx) => (
          <ProtectedRoute
            key={idx}
            path={`/auth${route.path}`}
            condition={true}
            component={route.component}
            redirectPathname="/auth"
          />
        ))}

        {AppRoutes.map((route, idx) => (
          <ProtectedRoute
            key={idx}
            path={`/app${route.path}`}
            condition={true}
            component={route.component}
            redirectPathname="/auth"
          />
        ))}*/}
        <ProtectedRoute
          path="/home"
          condition={true}
          redirectPathname="/app"
          component={() => (
            <div className="App">
              <Home />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
