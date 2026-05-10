import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Card from "../components/Card/Card";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Card
            },
            {
                path: "/about",
                Component: About
            }
        ]
    }
])