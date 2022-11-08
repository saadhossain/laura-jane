import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import WriteAReview from "../Pages/WriteAReview/WriteAReview";
import PrivateRouter from "./PrivateRouter";

export const Routers = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {path: '/', element:<Home></Home>},
            {
                path:'/services',
                loader: ()=> fetch('http://localhost:5000/services/'),
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/add-service',
                element:<PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path:'/write-review/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element:<PrivateRouter><WriteAReview></WriteAReview></PrivateRouter>
            }
        ]
    }
])