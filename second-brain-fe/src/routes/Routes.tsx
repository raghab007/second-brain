import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function UserRoutes() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    // {
    //   path: "dashboard",
    //   children: [{ path: "*", element: <Dashboard /> }],
    // },

    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
export default UserRoutes;
