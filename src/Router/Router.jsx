import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoute from "../Routes/PrivateRoute";
import MyApplication from "../MyApplications/MyApplication";
import Addjob from "../Pages/Addjob/Addjob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/viewApplications/ViewApplications";



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/register",
            Component: Register
        },
        {
            path: "/login",
            Component: Login
        },
        {
            path: "/jobs/:id",
            Component: JobDetails,
            loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path: "/jobApply/:id",
            element: <PrivateRoute><JobApply></JobApply></PrivateRoute> ,
            loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/my-applications',
          element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path: '/add-job',
          element: <PrivateRoute><Addjob></Addjob></PrivateRoute>
        },
        {
          path: '/my-posted-jobs',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: '/applications/:job_id',
          element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
        }
    ]
  },
]);

export default router;