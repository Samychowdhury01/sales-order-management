import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Main />,
  },
]);

export default router;
