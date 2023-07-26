import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
