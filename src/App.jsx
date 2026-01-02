import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import NotFound from "./components/NotFound/NotFound";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home/Home";
import Packages from "./Pages/Packages/Packages";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Loading from "./components/Loading/Loading";
import StoreContextProvider from "./context/storeContext";
import Dashboard from "./layouts/Dashboard";
import MainDashboard from "./components/Dashboard/MainDashboard/MainDashboard";
import Cart from "./Pages/Cart/Cart";
import Pay from "./components/Pay/Pay";
import SuccessPay from "./components/SuccessPay/SuccessPay";
import HoldingTank from "./components/Dashboard/HoldingTank/HoldingTank";
import MainServices from "./Pages/MainServices/MainServices";
import About from "./Pages/About/About";
import CourseeDetails from "./Pages/Home/Courses/CourseeDetails";
import MyWallet from "./components/Dashboard/MyWallet/MyWallet";
import Ewallet from "./components/Dashboard/Ewallet.jsx/Ewallet";
import MyCourses from "./components/Dashboard/MyCourses/MyCourses";
// import ViewCourse from "./components/Dashboard/MyCourses/ViewCourse";
import MyOrders from "./components/Dashboard/MyOrders/MyOrders";
import ViewOrder from "./components/Dashboard/MyOrders/ViewOrder";
import Profile from "./components/Dashboard/Profile/Profile";
import MyReports from "./components/Dashboard/MyReports.jsx/MyReports";
import MyBusiness from "./components/Dashboard/MyBusiness/MyBusiness";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Logout from "./components/Logout/Logout";
import ViewCourseBunny from "./components/Dashboard/MyCourses/ViewCourseBunny";
// import ViewCourse from "./components/Dashboard/MyCourses/ViewCourse";


function App() {
  const [loading, setLaoding] = useState(true);
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        {
          path: "packages",
          element: (
            <ProtectedRoutes>
              <Packages />
            </ProtectedRoutes>
          ),
        },
        {
          path: "our-services",
          element: <MainServices />,
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "my-cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        {
          path: "pay/:toPrice",
          element: (
            <ProtectedRoutes>
              <Pay />
            </ProtectedRoutes>
          ),
        },
        {
          path: "pay-success",
          element: (
            <ProtectedRoutes>
              <SuccessPay />
            </ProtectedRoutes>
          ),
        },
        {
          path: "course-details/:id",
          element: <CourseeDetails />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },

    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "sign-up", element: <SignUp /> },
        { path: "sign-in", element: <SignIn /> },
        { path: "forget-password", element: <ForgetPassword /> },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              <MainDashboard />
            </ProtectedRoutes>
          ),
        },
        {
          path: "main-dashboard",
          element: (
            <ProtectedRoutes>
              <MainDashboard />
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-team",
          element: (
            <ProtectedRoutes>
              <HoldingTank />
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-wallet",
          element: (
            <ProtectedRoutes>
              <MyWallet/>
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-courses",
          element: (
            <ProtectedRoutes>
              <MyCourses/>
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-courses/view-course/:id",
          element: (
            <ProtectedRoutes>
              {/* <ViewCourse /> */}
              <ViewCourseBunny/>
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-orders",
          element: (
            <ProtectedRoutes>
              <MyOrders/>
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-orders/view-order/:id",
          element: (
            <ProtectedRoutes>
              <ViewOrder/>
            </ProtectedRoutes>
          ),
        },
        {
          path: "e-wallet",
          element: (
            <ProtectedRoutes>
              <Ewallet/>
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-account",
          element: (
            <ProtectedRoutes>
              <Profile/>
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-reports",
          element: (
            <ProtectedRoutes>
              <MyReports/>
            </ProtectedRoutes>
          ),
        },
        {
          path: "my-business",
          element: (
            <ProtectedRoutes>
              <MyBusiness/>
            </ProtectedRoutes>
          ),
        },
      
      ],
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLaoding(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <StoreContextProvider>
        <RouterProvider router={routes} />
      </StoreContextProvider>

      <ToastContainer theme="colored" style={{minWidth:'max-content'}} />

    <Logout />
    </>
  );
}

export default App;
