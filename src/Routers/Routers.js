import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

export const Routers = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {path: '/', element:<Home></Home>},
            {
                path: '/service/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            }
        ]
    }
])