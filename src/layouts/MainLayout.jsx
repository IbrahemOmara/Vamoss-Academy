import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import ProfileSidebar from '../components/ProfileSidebar/ProfileSidebar'

export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <ProfileSidebar/>
      <Footer/>
    </>
  )
}
