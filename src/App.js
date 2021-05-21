import "./App.css";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import ProtectedRoute from "./core/routes/ProtectedRoute";

import Home from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
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
          path={/^(\/app)/}
          condition={false}
          redirectPathname="/home"
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
