import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import HomePage from "../pages/HomePage";

export const MainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
    }
])