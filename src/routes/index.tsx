import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/Error/errorPage";
import Login from "../components/landing/Login";
import OAuth from "../components/OAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <Login /> },
  { path: "/oauth", element: <OAuth /> },
]);
export default router;
