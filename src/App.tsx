import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import { ImagesProvider } from "./features/images/states/ImagesProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ImagesProvider>
      <RouterProvider router={router} />
    </ImagesProvider>
  </React.StrictMode>
);
