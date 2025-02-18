import { Outlet } from "react-router";
import Navbar from "./NavBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col mt-10 px-6">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
