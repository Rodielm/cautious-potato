import { RouterProvider } from "react-router";
import router from "./routes/routers";

const App = () => (
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);

export default App;
