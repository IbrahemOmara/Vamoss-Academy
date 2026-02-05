import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
// import { Link } from '@mui/icons-material';
import Avatar from "@mui/material/Avatar";

export default function NabarDashboard({ open, handleDrawerOpen, AppBar }) {
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar className="bg-main-color">
          <IconButton
            
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <nav className="navbar navbar-expand-lg p-0 flex-grow-1">
            <button
              className="navbar-toggler m-auto"
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
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/our-services">
                      Services
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
              </div>
            </div>
          </nav>
          <Link to={'/dashboard/my-account'}>
            <Avatar src="/broken-image.jpg" />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
