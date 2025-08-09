import {
  createBrowserRouter
  
} from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import Jobs from "../Pages/components/Jobs";
import JobDetails from "../Pages/components/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../Pages/components/ApplyJob";
import MyApplications from "../Pages/components/MyApplications";
import Addjob from "../Pages/Recruiters/Addjob";
import Test from "../Pages/Recruiters/Test";
import MyPostedJob from "../Pages/Recruiters/MyPostedJob";
import ShowApplicants from "../Pages/Recruiters/ShowApplicants";


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
              path:'/getjob/:id',
              element:
              <PrivateRoute>
                <JobDetails></JobDetails>
              </PrivateRoute>,
              
              loader: ({params}) => fetch(`http://localhost:3000/getjob/${params.id}`)

        },
        {
          path:'/apply/:id',
          element:<PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>,

        },
        {
          path:'/myapplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
      

        },
        {
          path:'test',
          element:<Test></Test>

        },
        {
          path:'/addjob',
          element:<PrivateRoute><Addjob></Addjob></PrivateRoute> ,
        },
        {
          path:'/mypostedjob',
          element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute> ,
        },
        {
          path:'/showApplicants/:jobid',
          element:<PrivateRoute><ShowApplicants></ShowApplicants></PrivateRoute> ,
          loader: ({params}) => fetch(`http://localhost:3000/get-applicants/${params.jobid}`)
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
