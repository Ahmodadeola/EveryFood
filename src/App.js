import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/index";

function App() {
  // const Main = (
  //   <div className="App">
  //     <Home />
  //   </div>
  // );
  return (
    <Router>
      <Switch>
        <Route
          to="/"
          render={() => (
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
