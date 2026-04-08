import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/imgs/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imgProfile from "../../assets/imgs/imgProfile.jpg";
import { StoreContext } from "../../context/storeContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const { countCartPkg, setCountCartPkg } = useContext(StoreContext);
  const [show, setShow] = useState("");
  const { toggleSidebarProfile, setToggleSidebarProfile } =
    useContext(StoreContext);
  let token;
  localStorage.dataAuth
    ? (token = JSON.parse(localStorage.dataAuth).token.token)
    : (token = null);
  const handleToggleSidebarProfile = () => {
    setToggleSidebarProfile(!toggleSidebarProfile);
  };

  useEffect(() => {
    if (token?.length) setShow("d-none");
    const numCartItem =
      JSON.parse(localStorage.getItem("cart_packages_Growth"))?.length || 0;
    setCountCartPkg(numCartItem);
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 fixed-top bg-main-color shadow">
        <div className="container border-bottom-dashed p-0 py-1">
          <Link className="navbar-brand" to="/">
            <div className="logo">
              <div className="img-logo">
                <img
                  className="w-100 h-100 object-fit-fill"
                  src={logo}
                  alt="logo"
                />
              </div>
              <span className="text-black"> Vamos Academy</span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>

          <div
            className="offcanvas offcanvas-start bg-main-color w-75"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header  justify-content-between p-0">
              <div className="logo">
                <div className="img-logo">
                  <img
                    className="w-100 h-100 object-fit-fill"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <span className="text-black"> Vamos Academy</span>
              </div>
              <button
                type="button"
                className="btn text-main-color"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-regular fa-circle-xmark fs-3"></i>
              </button>
            </div>
            <div className="offcanvas-body justify-content-between">
              <ul className="menu align-items-center navbar-nav ms-lg-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/our-services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about-us">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>

              <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${show}`}>
                <li className="nav-item">
                  <NavLink className="btn btn-login " to="/auth/sign-in">
                    Log in
                  </NavLink>
                </li>
                <li className="nav-item mt-3 mt-lg-0">
                  <NavLink className="btn my-btn" to="/auth/sign-up">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {token?.length > 0 ? (
            <div className="">
              <Link className="btn position-relative me-3" to="/my-cart">
                <ShoppingCartIcon />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {countCartPkg}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
              <button
                onClick={handleToggleSidebarProfile}
                className="btn text-black link-dashboard border-0 "
              >
                <div className="img-profile">
                  <img
                    src={imgProfile}
                    className="w-100 h-100 object-fit-fill"
                  />
                </div>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}
