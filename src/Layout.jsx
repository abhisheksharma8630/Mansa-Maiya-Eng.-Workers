import React from 'react'
import Header from './components/headerfile/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
