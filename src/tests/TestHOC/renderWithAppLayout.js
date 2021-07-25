import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppLayout from "../../layouts/appLayout";

export default function renderWithRouter(component) {
  return {
    ...render(
      <MemoryRouter>
        <AppLayout></AppLayout>
        {component}
      </MemoryRouter>
    ),
  };
}
