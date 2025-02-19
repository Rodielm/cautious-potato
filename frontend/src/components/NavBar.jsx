import { ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Fragment } from "react";
import { useCart } from "@/contexts/cartContext";

const Navbar = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <h1 className="text-xl font-bold">Ecommerce Test</h1>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between gap-1 md:justify-end">
          <ShoppingCart />
          <div>{cartCount}</div>
        </div>
      </header>

      {/* BreadCrumb  */}
      <div className="px-6 mt-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((val, idx) => {
              const path = `/${pathnames.slice(0, idx + 1).join("/")}`;
              return (
                <Fragment key={idx}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      {path !== "/product" && (
                        <Link to={path}>{decodeURIComponent(val)}</Link>
                      )}
                      {path === "/product" && (
                        <span>{decodeURIComponent(val)}</span>
                      )}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
};

export default Navbar;
