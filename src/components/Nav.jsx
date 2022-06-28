import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";

import CartContext from "../context/cartContext";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const handleOpen = () => setOpen((op) => !op);

  return (
    <header className="w-full h-[50px] flex items-center justify-center shadow-sm px-4 relative">
      <nav className="w-full max-w-[1240px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div
            className="md:hidden absolute top-0 left-0 z-20 px-8 py-[1rem] text-3xl text-gray-600"
            onClick={handleOpen}
          >
            <ion-icon
              name={`${open ? "close-outline" : "menu-outline"}`}
              className="text-6xl"
            ></ion-icon>
          </div>
          <img
            src={logo}
            alt="logo"
            className="h-[15px] md:mr-20 ml-16 md:ml-0"
          />
          <ul
            className={`absolute md:static top-0  bg-white shadow-lg md:shadow-none h-screen z-10 px-8 md:px-0 opacity-100 duration-500 ease-in-out ${
              open ? "left-0 w-[60%]" : "left-[-100%] opacity-0"
            } md:flex md:opacity-100 justify-between md:w-[100%] items-center md:h-auto`}
          >
            <li className="mt-[4rem] md:mt-0 py-1 md:py-0 md:mr-8">
              <a
                href="#"
                className="font-bold md:text-gray-300 hover:text-gray-400 duration-300 ease-in-out"
              >
                Collections
              </a>
            </li>
            <li className="py-1 md:py-0 md:mr-8">
              <a
                href="#"
                className="font-bold md:text-gray-300 hover:text-gray-400 duration-300 ease-in-out"
              >
                Men
              </a>
            </li>
            <li className="py-1 md:py-0 md:mr-8">
              <a
                href="#"
                className="font-bold md:text-gray-300 hover:text-gray-400 duration-300 ease-in-out"
              >
                Women
              </a>
            </li>
            <li className="py-1 md:py-0 md:mr-8">
              <a
                href="#"
                className="font-bold md:text-gray-300 hover:text-gray-400 duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li className="py-1 md:py-0">
              <a
                href="#"
                className="font-bold md:text-gray-300 hover:text-gray-400 duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center ml-auto">
          <div className="relative mr-8 text-3xl">
            <ion-icon name="cart-outline"></ion-icon>
            {cart.length > 0 && (
              <span className="absolute right-0 top-0 rounded-full w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center bg-[#fe7e1c] font-bold">
                {cart.length}
              </span>
            )}
          </div>
          <img src={avatar} className="h-[30px]" alt="avatar" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
