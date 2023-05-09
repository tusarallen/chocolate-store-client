/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddChocolate from "./components/AddChocolate";
import ChocolateTable from "./components/ChocolateTable";
import UpdateChocolate from "./components/UpdateChocolate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChocolateTable></ChocolateTable>,
    loader: () => fetch("http://localhost:5000/chocolates"),
  },
  {
    path: "/addChocolate",
    element: <AddChocolate></AddChocolate>,
  },
  {
    path: "/updateChocolate/:id",
    element: <UpdateChocolate></UpdateChocolate>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/updateChocolate/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
