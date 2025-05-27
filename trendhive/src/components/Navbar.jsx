import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium relative z-50">
      <Link to="/">
        <img
          src={assets.logo}
          className="w-36 h-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
          alt="Logo"
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="flex items-center h-full text-gray-800 transition duration-300 ease-in-out transform hover:text-lightblue-500 hover:scale-105">
            HOME
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="flex items-center h-full text-gray-800 transition duration-300 ease-in-out transform hover:text-lightblue-500 hover:scale-105">
            COLLECTION
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="flex items-center h-full text-gray-800 transition duration-300 ease-in-out transform hover:text-lightblue-500 hover:scale-105">
            ABOUT
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="flex items-center h-full text-gray-800 transition duration-300 ease-in-out transform hover:text-lightblue-500 hover:scale-105">
            CONTACT
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 h-5 object-contain my-auto cursor-pointer transition-transform duration-300 hover:scale-125 hover:opacity-80 hover:brightness-110"
          alt="search_icon"
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 h-5 object-contain my-auto cursor-pointer transition-transform duration-300 hover:scale-125 hover:opacity-80 hover:brightness-110"
            alt="profile_icon"
          />

          {token && (
            <div className="invisible group-hover:visible absolute top-full right-0 pt-2 z-50">
              <div className="bg-white text-gray-500 rounded-lg shadow-lg w-36 border border-gray-100">
                <p
                  href="#"
                  className="block w-full text-left px-4 py-2 hover:bg-slate-200 hover:text-black cursor-pointer transition-colors"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  href="#"
                  className="block w-full text-left px-4 py-2 hover:bg-slate-200 hover:text-black cursor-pointer transition-colors"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  href="#"
                  className="block w-full text-left px-4 py-2 hover:bg-slate-200 hover:text-black cursor-pointer transition-colors"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 transition-transform duration-300 hover:scale-125 hover:opacity-80 hover:brightness-110"
            alt="cart_icon"
          />
          <p className="absolute right-[-5px] bottom-[-7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu_icon"
        />
      </div>
      {/* Side bar menu for small screen  */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col items-start  text-gray-600">
          <div
            className="flex items-center gap-4 p-3 justify-start cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="dropdown_icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border w-full"
            to="/"
          >
            HOME{" "}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border w-full"
            to="/collection"
          >
            COLLECTION{" "}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border w-full"
            to="/about"
          >
            ABOUT{" "}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border w-full"
            to="/contact"
          >
            CONTACT{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
