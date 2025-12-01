import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split pathname and filter out empty strings
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") return null;

  return (
    <div className="bg-gray-50 py-3 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto">
        <nav className="flex items-center space-x-2 text-sm">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-red-600 transition"
          >
            <FaHome className="mr-1" />
            Home
          </Link>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName =
              name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");

            return (
              <React.Fragment key={routeTo}>
                <FaChevronRight className="text-gray-400 text-xs" />
                {isLast ? (
                  <span className="text-red-600 font-semibold">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-600 hover:text-red-600 transition"
                  >
                    {displayName}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
