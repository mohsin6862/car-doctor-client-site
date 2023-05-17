import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Bookings from "../Pages/Bookings/Bookings";
import ViewBooking from "../Pages/ViewBooking/ViewBooking";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>

        },
        {
          path:'/bookings/:id',
          element:<Bookings></Bookings>,
         loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path:'/view-booking',
          element:<PrivateRoutes><ViewBooking></ViewBooking></PrivateRoutes>,
        

        }
      ]
    },
  ]);
  export default router;