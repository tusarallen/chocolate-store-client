/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddChocolate from "./components/AddChocolate";
import ChocolateTable from "./components/ChocolateTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChocolateTable></ChocolateTable>,
    loader: () => fetch("http://localhost:5000/chocolate"),
  },
  {
    path: "/addChocolate",
    element: <AddChocolate></AddChocolate>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
