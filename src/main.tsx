import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import Books from "./pages/Books.tsx";
import Details from "./pages/Details.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Books />,
    },
    {
        path: "/details/:type/:id",
        element: <Details />,
    },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
);