import React from 'react'
import Header from '../Header/Header'
import HomeServices from '../HomeServices/HomeServices'
import Why from '../Why/Why'
import VisionsAndMissions from '../VisionsAndMissions/VisionsAndMissions'
import Courses from '../Courses/Courses'
import Instructors from '../Instructors/Instructors'

export default function Home() {
  return (
    <>
      <Header/>
      <HomeServices/>
      <Why/>
      <VisionsAndMissions/>
      <Courses/>
      <Instructors/>
    </>
  )
}
