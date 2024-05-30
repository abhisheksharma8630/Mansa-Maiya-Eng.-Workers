import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App/>
//   },
//   {
//     path:'/hell',
//     element: <h1>welcome to helloworld</h1>
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
