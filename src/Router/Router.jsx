import {
  createBrowserRouter
  
} from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import Jobs from "../Pages/components/Jobs";


const router = createBrowserRouter([
  {
    path: "/",
    element:<ManiLayout></ManiLayout> ,
    errorElement:<h2>Page not found</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            children:[
                {index:true,
                element:<Jobs></Jobs>
               
                }
            ]
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
