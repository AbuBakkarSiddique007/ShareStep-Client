import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";

import AddVolunteerPost from "../components/AddVolunteerNeedPost";


import Allpost from "../components/Allpost";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-posts",
                element: <Allpost></Allpost>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/add-volunteer-post",
                element: <AddVolunteerPost></AddVolunteerPost>
            }
        ]
    }
]);
