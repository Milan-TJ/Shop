import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Notfound from "./components/Notfound";
import Signup from "./Signup";
import Signin from "./Signin";
import Cart from "./components/Cart";
import { AuthorizeUser } from "./store/AuthorizeUser";
import Profile from "./components/Profile";
import Checkout from "./components/checkout/Checkout";
import Order from "./components/Order";
import Loader from "./components/elements/Loader";
// import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home Main={"Hero"} />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "products/",
    element: <Home Main={"Products"} />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/admin",
    element: <Notfound />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/checkout",
    element: (
      <AuthorizeUser>
        <Checkout />
      </AuthorizeUser>
    ),
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/Loading",
    element: <Loader />,
  },
  // {
  //   path: "/404",
  //   element: <Notfound />,
  // },
  // {
  //   path: "*",
  //   element: <Navigate to="/404" />,
  // },
]);

export default router;
