import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import Allpost from "../components/Allpost";
import AddVolunteerPost from "../components/AddVolunteerNeedPost";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all-posts",
                element: <Allpost></Allpost>
            },
            {
                path: "/add-post",
                element: <AddVolunteerPost></AddVolunteerPost>
            },


        ]
    }
]);
