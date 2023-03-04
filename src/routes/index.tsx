import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import App from "../App";
import * as helper from "./../config/helper"
import Login from "../components/landing/Login";
import OAuth from "../components/OAuth";
import Chat from "../components/chat/Chat";
import ErrorPage from "../components/Error/errorPage";
import PrivateRoute from "../components/PrivateRoute";
const privateRoute: RouteObject[] = [{ path: "/", element: <Chat/> }]; 
export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: helper.haveAuthorizeToken() ? [{path:"/",element:<PrivateRoute/> ,children:privateRoute}] : [{ path: "/", element: <Login /> }]
  },
  { path: "/login", element: <Login /> },
  { path: "/oauth", element: <OAuth /> },
]); 