import React, { memo } from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "../components/home/footer";
import authRoutes from "../core/routes/auth.routes";
import ProtectedRoute from "../core/routes/ProtectedRoute";

function AuthLayout({ children }) {
  return (
    <>
      <div className="flex justify-center items-center bg-green-500 min-h-screen p-6">
        <div className="w-full h-full md:min-h-3/4 md:w-1/3 bg-white">
          <Switch>
            <Route
              exact
              path="/auth"
              render={() => <Redirect to="/auth/login" />}
            />
            {authRoutes.map((route, idx) => (
              <ProtectedRoute
                key={idx}
                path={`/auth/${route.path}`}
                condition={true}
                component={route.component}
                redirectPathname="/app"
              />
            ))}
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default memo(AuthLayout);
