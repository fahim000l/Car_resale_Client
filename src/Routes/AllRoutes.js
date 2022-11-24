import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categoryProducts/:id',
                element: <CategoryProducts></CategoryProducts>
            }
        ]
    },
]);

export default router;