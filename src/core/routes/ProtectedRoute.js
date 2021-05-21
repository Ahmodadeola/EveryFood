import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  condition,
  component,
  redirectPathname,
  location,
}) => {
  const Component = component;
  return condition ? (
    <Component />
  ) : (
    <Redirect to={redirectPathname || location} />
  );
};

export default ProtectedRoute;
