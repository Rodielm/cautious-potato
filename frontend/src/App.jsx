import { RouterProvider } from "react-router";
import router from "./routes/routers";
import { CartProvider } from "./contexts/cartContext";

const App = () => (
  <>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </>
);

export default App;
