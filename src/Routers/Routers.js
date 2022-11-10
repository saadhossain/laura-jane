import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import PostBlog from "../Pages/Blogs/PostBlog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EditReview from "../Pages/MyReviewsServices/EditReview";
import EditService from "../Pages/MyReviewsServices/EditService";
import MyReviewsServices from "../Pages/MyReviewsServices/MyReviewsServices";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import WriteAReview from "../Pages/WriteAReview/WriteAReview";
import PrivateRouter from "./PrivateRouter";

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://laura-jane.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-service',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            //Write a Review Route and I am using loader beacuase I am showing related service on the right side wite review page on which  User is writing review, 
            {
                path: '/write-review/:id',
                loader: ({ params }) => fetch(`https://laura-jane.vercel.app/services/${params.id}`),
                element: <PrivateRouter><WriteAReview></WriteAReview></PrivateRouter>
            }
            ,
            //Activity page, where I am showing all reviews and all services added by the user
            {
                path: '/activity',
                element: <PrivateRouter><MyReviewsServices></MyReviewsServices></PrivateRouter>
            },
            //Editing Review route and we are loading the review for edit, as we need its value and specially it's id
            {
                path: '/review/edit/:id',
                loader: ({ params }) => fetch(`https://laura-jane.vercel.app/reviews/${params.id}`),
                element: <PrivateRouter><EditReview></EditReview></PrivateRouter>
            },
            //Editing Service route and we are loading the Service for edit, as we need its value and specially it's id
            {
                path: '/service/edit/:id',
                loader: ({ params }) => fetch(`https://laura-jane.vercel.app/services/${params.id}`),
                element: <PrivateRouter><EditService></EditService></PrivateRouter>
            },
            //Blogs route
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            //Write a Blog route and it is private route
            {
                path: '/blog/publish',
                element: <PrivateRouter><PostBlog></PostBlog></PrivateRouter>
            },
            //Blog details page
            {
                path: '/blog/:id',
                loader: ({ params }) => fetch(`https://laura-jane.vercel.app/blog/${params.id}`),
                element: <BlogDetails></BlogDetails>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])