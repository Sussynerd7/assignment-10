import { createBrowserRouter } from "react-router";
import Homelayout from "../Homelayout/Homelayout";
import Home from "../Components/Home/Home";
import Allfood from "../Components/Allfood/Allfood";
import Authlayout from "../Authlayout/Authlayout";
import Register from "../Authlayout/Register";
import Login from "../Authlayout/Login";

const router = createBrowserRouter([
{
    path:'/',
    Component:Homelayout,
    children:[
        
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/foods',
                element:<Allfood></Allfood>
            }
        
    ]

},

{
    path:'/auth',
    element:<Authlayout></Authlayout>,
    children:[
        {
            path:'/auth/register',
            element:<Register></Register>
        },
        {
            path:'/auth/login',
            element:<Login></Login>
        },
    ]
}
]);


export default router