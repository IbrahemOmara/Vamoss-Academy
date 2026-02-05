import React, { useContext, useState } from 'react'
import './ProfileSidebar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import imgProfile from '../../assets/imgs/imgProfile.jpg'
import { StoreContext } from '../../context/storeContext';

export default function ProfileSidebar() {

   const navigate = useNavigate();
   const data = localStorage.dataAuth?JSON.parse(localStorage.dataAuth):null;
   const {toggleSidebarProfile,setToggleSidebarProfile} = useContext(StoreContext);

   const [hideSidebar, setHideSidebar] = useState('translete-x-100');
   const closeSidebar = ()=> {
    setToggleSidebarProfile(!toggleSidebarProfile);
   }
    const logOut = ()=>{
      localStorage.removeItem("dataAuth");
      navigate('auth/sign-in');
      window.location.reload();
    }

  return (
    <>
     <div className={`profile-sidebar ${!toggleSidebarProfile?hideSidebar:''}`}>
        <div className="head-sidebar-profile d-flex justify-content-between ">
            <div className="img-profile">
                <img src={imgProfile} className="w-100 h-100 object-fit-fill" />
            </div>
            <div className="data-user fs-v-small overflow-hidden">
                <p className='m-0'>Your ID :<span className='fw-bold'> {data?.referId}</span></p>
                <span className='text-main-color'>{data?.name}</span>
            </div>
            <button onClick={closeSidebar} className="text-black btn border-0 fs-4 py-0">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
        </div>
        <div className="profile-links">
            <ul className="navbar-nav mt-3">
                <li className="nav-item">
                    <Link onClick={closeSidebar} className="nav-link" aria-current="page" to="/packages">
                        <i className="fa-solid fa-cubes"></i>
                        <span className='d-md-block'> Packages</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link onClick={closeSidebar} className="nav-link" to="dashboard">
                        <i className="fa-solid fa-house"></i>
                        <span className='d-md-block'> Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link onClick={closeSidebar} className="nav-link" aria-current="page" to="dashboard/my-account">
                        <i className="fa-regular fa-user"></i>
                        <span className='d-md-block'> My Profile</span>
                    </Link>
                </li>
                <li className="nav-item border-top mt-3">
                    <button onClick={logOut} className="btn text-black nav-link " to="/sign-in">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span className='d-md-block'>Log out</span>
                    </button>
                </li>
            </ul>
        </div>
     </div> 
    </>
  )
}
