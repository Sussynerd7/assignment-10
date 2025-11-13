import { createBrowserRouter } from "react-router";
import Homelayout from "../Homelayout/Homelayout";
import Home from "../Components/Home/Home";
import Allfood from "../Components/Allfood/Allfood";
import Authlayout from "../Authlayout/Authlayout";
import Register from "../Authlayout/Register";
import Login from "../Authlayout/Login";
import Details from "../Components/Foodshow/Details";
import Create from "../Cruds/Create";
import Myfoods from "../Components/Myfoods/Myfoods";
import Update from "../Components/Update/Update";
import Myrequest from "../Cruds/Myrequest";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Homelayout,
        errorElement:<Error></Error>,
        children: [

            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/foods',
                //here
                element: <Allfood></Allfood>
            },
            {
                path: '/food/:id',
                element: <Details></Details>
            },
            {
                path: '/create',
                element: <Create></Create>
            },
            {
                path: '/myfoods',
                element: <Myfoods></Myfoods>
            },
            {
                path: '/update/:id',
                element: <Update></Update>
            },
            {
                path: '/requests',
                element: <Myrequest></Myrequest>
            },
           

        ]

    },
     {
        path: '/auth',
        element: <Authlayout></Authlayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
        ]
    }

    
]);


export default router