import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import SwiperComponent from "../components/SwiperComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                // element: <Home></Home>
                element: <SwiperComponent></SwiperComponent>
            }
        ]
    }
]);
