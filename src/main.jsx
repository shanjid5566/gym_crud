import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import CreateUsersPage from "./pages/CreateUsersPage.jsx";
import Users from "./pages/Users.jsx";
import EditUserInfoPage from "./pages/EditUserInfoPage.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:4000/create-users"),
  },
  {
    path: "/create-users",
    element: <CreateUsersPage></CreateUsersPage>,
  },
  {
    path: "/users/:id",
    element: <EditUserInfoPage></EditUserInfoPage>,
    loader: ({params}) => fetch(`http://localhost:4000/users/${params.id}`)
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
