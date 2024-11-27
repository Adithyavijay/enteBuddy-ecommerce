import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import LoginModel from "./LoginModel";
import logo from "../img/logo.png";
import { userContext } from "../contexts/UserContext";
import { Toaster, toast } from "react-hot-toast";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { LogContext } from "../contexts/LogContext";
import Logout from "./Logout";
import {
  RiInformationLine,
  RiCustomerService2Line,
  RiShoppingBag3Line,
  RiCloseLine,
} from "react-icons/ri";
import { TiThMenuOutline } from "react-icons/ti";
import { RiMenuFoldLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { CgMenuMotion } from "react-icons/cg";

const Header = (cookies) => {
  const { itemAmount, handleCart } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { showModal, setShowModal } = useContext(LogContext);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const { userId } = useContext(userContext);
  const [aboutModal, setAboutModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [leftDropdown, setLeftDropdown] = useState(false);
  const [leftSidebar, setLeftSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let visible;
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        visible = true;
      } else {
        visible = window.scrollY < 250;
      }
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); 


  useEffect(()=>{
    document.body.style.overflow = leftSidebar ? "hidden" : "auto";
  },[leftSidebar])

  const toggleMenu = () => {
    setDropDown(!dropDown);
  };
  const toggleLeftMenu = () => {
    setLeftDropdown((prev) => !prev);
  };
  const handleOrder = (e) => {
    toggleLeftMenu();
    if (!userId) {
      e.preventDefault();
      setShowModal(true);
      toast.error("Please login to continue!!!");
    }
  };
  return (
    <div>
      <Toaster toastOptions={{ duration: 2000 }} />
      <div
        className={`navbar bg-hero2 bg-tertiary bg-contain z-10 fixed transition-transform duration-300 ${
          visible ? "" : "transform -translate-y-full "
        } `}
      >
        {/* <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost btn-circle"
            >
              <svg
                onClick={toggleLeftMenu}
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-poppins bg-gradient-to-b from-[#FFFFFF] to-[#FEEE9F] "
              style={{ display: leftDropdown ? "block" : "none" }}
            >
              <li>
                <Link
                  className="text-black"
                  onClick={() => {
                    setAboutModal(!aboutModal);
                    setLeftDropdown(!leftDropdown);
                  }}
                >
                  About us
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-black"
                  onClick={() => {
                    setContactModal(!contactModal);
                    setLeftDropdown(!leftDropdown);
                  }}
                >
                  Contact us
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-black"
                  to={`/fetchOrders/${userId}`}
                  onClick={handleOrder}
                >
                  Orders
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
        <div
          className="navbar-start cursor-pointer ml-4"
          onClick={() => setLeftSidebar(true)}
        >
          <CgMenuMotion className="text-yellow-500 w-7 h-7 hover:rotate-180 transition-all duration-300" />
        </div>
        <aside
          className={`fixed z-50  inset-y-0 left-0 w-80 bg-gradient-to-b from-white to-yellow-50 shadow-xl transform transition-transform duration-300 ${
            leftSidebar ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <div className="bg-black  inset-0"></div>
          <div className="flex flex-col h-full w-full">
            {/* Header with full width and spread items */}
            <div className="w-full border-b border-gray-200">
              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="logo" className="h-8" />
                </div>
                <button className="hover:bg-yellow-100 p-2 rounded-lg transition-colors">
                  <RiCloseLine
                    className="w-6 h-6 text-gray-600"
                    onClick={() => setLeftSidebar(false)}
                  />
                </button>
              </div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 px-4 mt-6">
              <div className="space-y-2">
                <Link to={"/about-us"}   onClick={() => {setTimeout(() => leftSidebar(false), 100); }} 
                 className="flex items-center w-full p-4 text-gray-700 hover:bg-yellow-100 rounded-xl transition-all duration-200 group">
                  <RiInformationLine className="w-5 h-5 group-hover:text-yellow-600 transition-colors" />
                  <span className="ml-4 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    About Us
                  </span>
                </Link>

                <button onClick={()=>{setContactModal(true) ; setLeftSidebar(false)}} className="flex items-center w-full p-4 text-gray-700 hover:bg-yellow-100 rounded-xl transition-all duration-200 group">
                  <RiCustomerService2Line className="w-5 h-5 group-hover:text-yellow-600 transition-colors" />
                  <span className="ml-4 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Contact
                  </span>
                </button>

                <Link  to={`/fetchOrders/${userId}`} onClick={handleOrder} className="flex items-center w-full p-4 text-gray-700 hover:bg-yellow-100 rounded-xl transition-all duration-200 group">
                  <RiShoppingBag3Line className="w-5 h-5 group-hover:text-yellow-600 transition-colors" />
                  <span className="ml-4 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Orders
                  </span>
                </Link>
              </div>
            </nav>

            {/* Optional: Footer Section */}
            <div className="p-4 mt-auto">
              <div className="p-4 bg-yellow-50 rounded-xl">
                <p className="text-sm text-gray-600">© 2024 enteBuddy</p>
              </div>
            </div>
          </div>
        </aside>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} className="w-15 h-10" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle relative"
            >
              <div className="w-8 rounded-full ">
                <FaUser
                  onClick={() => {
                    toggleMenu();
                  }}
                  className="ml-2 text-xl text-primary"
                />
                {userId && (
                  <div className="bg-secondary  w-3 h-3 rounded-full absolute top-2 right-2"></div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-1 z-[1]  shadow bg-base-100 rounded-box w-32  transition-transform duration-300 dark:bg-white dark:text-black`}
              style={{ display: dropDown ? "block" : "none" }}
            >
              <li>
                {" "}
                {userId ? (
                  <Logout />
                ) : (
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setDropDown(!dropDown);
                    }}
                  >
                    login
                  </button>
                )}
              </li>
            </ul>
          </div>

          <button className="btn btn-ghost btn-circle" onClick={handleCart}>
            <div className="indicator">
              <FaShoppingCart className="text-2xl text-yellow-400" />
              {itemAmount > 0 && (
                <span
                  className="badge badge-sm badge-secondary  indicator-item"
                  style={{ backgroundColor: "#DE5B9D" }}
                >
                  {itemAmount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* cart icon */}
      {/* <div onClick={()=>{
        setIsOpen(!isOpen)
      }}>
        
      </div> */}
      {showModal && <LoginModel />}

      {contactModal && (
        <ContactUs
          onClose={() => {
            setContactModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Header;
