import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
        
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
export default router;