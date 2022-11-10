import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import AddServices from "../../components/AddServices/AddServices";
import Blog from "../../components/Blog/Blog";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Login/Register/Register";
import Reviews from "../../components/Reviews/Reviews";
import Main from "../../layouts/Main/Main";
import AllServices from "./../../components/AllServices/AllServices/AllServices";
import ServiceDetails from "./../../ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/addServices",
        element: <AddServices></AddServices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/allServices/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allServices/${params.id}`),
      },
    ],
  },
]);
