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
        path: "/Product",
        element: <Product />,
      },

      // {
      //   path: "/*",
      //   element: <NotFound />,
      // },
    ],
  },
]);

export default router;
