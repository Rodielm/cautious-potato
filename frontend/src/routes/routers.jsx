import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Layout from "@/components/Layout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Product/:productId",
        element: <Product />,
      },
      {
        path: "*",
        element: <h1>404 - Not Found</h1>,
      },
    ],
  },
]);

export default router;
