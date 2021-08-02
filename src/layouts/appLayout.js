import React, { memo } from "react";
import NavBar from "../components/app/NavBar";
import Header from "../components/app/Header";
import DishInfo from "../pages/app/dishes/dish-info";
import { Switch, Redirect, Route } from "react-router";
import appRoutes from "../core/routes/app.routes";
import ProtectedRoute from "../core/routes/ProtectedRoute";

function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="md:w-4/5 md:float-right">
        <Header />
      </div>

      <main className="w-full min-h-screen md:w-4/5 md:float-right bg-gray-100 pt-16 md:pt-20">
        <Switch>
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dishes" />}
          />
          <ProtectedRoute
            path={`/app/dishes/dish-info`}
            condition={true}
            component={DishInfo}
            redirectPathname="/auth"
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

export default memo(AppLayout);
