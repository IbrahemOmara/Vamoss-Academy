import React, { useContext } from "react";
import logo from "../../../assets/imgs/logo.png";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BusinessIcon } from "../../MyIcons/BusinessIcon";
import { ReportIcon } from "../../MyIcons/ReportIcon";
import { OrdersIcon } from "../../MyIcons/OrdersIcon";
import { HomeIcon } from "../../MyIcons/HomeIcon";
import { WalletIcon } from "../../MyIcons/WalletIcon";
import { PersonIcon } from "../../MyIcons/PersonIcon";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import { StoreContext } from "../../../context/storeContext";
import { HoldingTankIcon } from "../../MyIcons/HoldingTankIcon";
import { EwalletIcon } from "../../MyIcons/EwalletIcon";
import { CoursesIcon } from "../../MyIcons/CoursesIcon";

export default function SideBarDash({
  open,
  handleDrawerClose,
  DrawerHeader,
  theme,
  Drawer,
}) {
  const navigate = useNavigate();
  const { titleDashboard, setTitleDashboard } = useContext(StoreContext);
  const dataUser = JSON.parse(localStorage.dataAuth);

  const newTheme = createTheme({
    palette: { mode: "light", background: "#22405e78" },
  });

  const handleItemClick = (text) => {
    setTitleDashboard(text);
    switch (text) {
      case "Dashboard":
        navigate("/dashboard/main-dashboard");
        break;
      case "My Wallet":
        navigate("/dashboard/my-wallet");
        break;
      case "E Wallet":
        navigate("/dashboard/E-wallet");
        break;
      case "My Team":
        navigate("/dashboard/my-team");
        break;
      case "My Courses":
        navigate("/dashboard/my-courses");
        break;
      case "My Orders":
        navigate("/dashboard/my-orders");
        break;
      case "My Business":
        navigate("/dashboard/my-business");
        break;
      case "My Reports":
        navigate("/dashboard/my-reports");
        break;
      case "My Profile":
        navigate("/dashboard/my-account");
        break;
      default:
        break;
    }
  };

  const isActive = (text) => {
    if(!dataUser.ns_balance && text==='My Wallet') return 'd-none'
    return text === titleDashboard ? "activeNavDash" : "";
    
  };

  return (
    <>
      <ThemeProvider theme={newTheme}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Link className="navbar-brand w-100" to="/">
              <div className="logo d-flex align-items-center">
                <div className="img-logo">
                  <img
                    className="w-100 h-100 object-fit-fill"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <span className="text-black fs-5 "> Vamos Academy</span>
              </div>
            </Link>
            <IconButton className="text-black" onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />

          <List>
            {[
              "Dashboard",
              "My Wallet",
              "E Wallet",
              "My Team",
              "My Courses",
              "My Orders",
              "My Business",
              "My Reports",
              "My Profile",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={isActive(text) + " text-black"}
                  onClick={() => handleItemClick(text)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "var(--main-color-1)",
                    }}
                  >
                    {index === 0 ? <HomeIcon /> : ""}
                    {index === 1 ? <WalletIcon /> : ""}
                    {index === 2 ? <EwalletIcon /> : ""}
                    {index === 3 ? <HoldingTankIcon /> : ""}
                    {index === 4 ? <CoursesIcon /> : ""}
                    {index === 5 ? <OrdersIcon /> : ""}
                    {index === 6 ? <BusinessIcon /> : ""}
                    {index === 7 ? <ReportIcon /> : ""}
                    {index === 8 ? <PersonIcon /> : ""}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </ThemeProvider>
    </>
  );
}
