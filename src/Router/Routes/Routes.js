import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../components/Home/Appointmnet/Appointment/Appointment";
import Home from "../../components/Home/Home/Home";

import Main from "../../Layout/Main";
import Error from "../ErrorPage/Error";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
        ]
        
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
export default router;