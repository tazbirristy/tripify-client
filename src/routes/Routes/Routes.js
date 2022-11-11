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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateReviews from "./../../components/Reviews/UpdateReviews";

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
        path: "/review",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
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
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
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
        path: "/updateReviews/:id",
        loader: ({ params }) =>
          fetch(`https://tripify-server.vercel.app/reviews/${params.id}`),
        element: <UpdateReviews></UpdateReviews>,
      },
      {
        path: "/allServices/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://tripify-server.vercel.app/allServices/${params.id}`),
      },
    ],
  },
]);
