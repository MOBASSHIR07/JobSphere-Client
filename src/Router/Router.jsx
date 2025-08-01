import {
  createBrowserRouter
  
} from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";


const router = createBrowserRouter([
  {
    path: "/",
    element:<ManiLayout></ManiLayout> ,
    errorElement:<h2>Page not found</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'login',
          element: <SignIn></SignIn>
        }
    ]
  },
]);

export default router
