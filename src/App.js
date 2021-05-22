import "./App.css";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import ProtectedRoute from "./core/routes/ProtectedRoute";
import AppRoutes from "./core/routes/app.routes";
import AuthRoutes from "./core/routes/auth.routes";

import Home from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        {AuthRoutes.map((route, idx) => (
          <ProtectedRoute
            path={`/app/${route.path}`}
            condition={false}
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
