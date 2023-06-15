import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import { ImagesProvider } from "./features/images/states/ImagesProvider";
import Login from "./pages/Login";
import { UserProvider } from "./features/users/states/UserProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <UserProvider>
      <ImagesProvider>
        <RouterProvider router={router} />
      </ImagesProvider>
    </UserProvider>
  </React.StrictMode>
);
