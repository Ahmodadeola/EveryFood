import "./App.css";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import ProtectedRoute from "./core/routes/ProtectedRoute";
import AppRoutes from "./core/routes/app.routes";
import AuthRoutes from "./core/routes/auth.routes";
import Detail from "./pages/app/dishes/dish-info";
import Home from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <ProtectedRoute
          path="/app/dishes/dish-info"
          condition={true}
          component={Detail}
          redirectPathname="/home"
        />
        {AuthRoutes.map((route, idx) => (
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
        ))}
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

        <ProtectedRoute
          path={/^(\/auth)/}
          condition={false}
          redirectPathname="/"
        />
      </Switch>
    </Router>
  );
}

export default App;
