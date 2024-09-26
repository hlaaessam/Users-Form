/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

function NavList(state) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-medium hidden`}
      >
        <Link
          to="/Products"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Products
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/login"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Login
        </Link>
      </Typography>
    </ul>
  );
}

const Header = (state) => {
  console.log(state);

  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Form
        </Typography>
        <div className="hidden lg:block">
          <NavList state={state} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <IoClose className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaBars className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;
