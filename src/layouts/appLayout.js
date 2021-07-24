import React from "react";
import NavBar from "../components/app/NavBar";
import Header from "../components/app/Header";
import { Switch, Redirect, Route } from "react-router";
import appRoutes from "../core/routes/app.routes";
import ProtectedRoute from "../core/routes/ProtectedRoute";

function AppLayout({ children, page }) {
  return (
    <>
      <NavBar />
      <div className="md:w-4/5 md:float-right">
        <Header />
      </div>

      <main className="w-full md:w-4/5 md:float-right bg-gray-100 pt-20">
        <Switch>
          <Route
            exact
            path="/auth"
            render={() => <Redirect to="/auth/login" />}
          />
          {appRoutes.map((route, idx) => (
            <ProtectedRoute
              key={idx}
              path={`/app/${route.path}`}
              condition={true}
              component={route.component}
              redirectPathname="/auth"
            />
          ))}
        </Switch>
      </main>
    </>
  );
}

export default AppLayout;
