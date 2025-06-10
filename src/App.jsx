import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPastes from './components/ViewPastes'
import NavBar from './components/Navbar'
const router = createBrowserRouter(
  [
    {
      path : "/",
      element : 
        <div>
          <NavBar/>
          <Home/>
        </div>
    },
    {
      path : "/pastes",
      element : 
        <div>
          <NavBar/>
          <Pastes/>
        </div>
    },
    {
      path : "pastes/:id",
      element : 
        <div>
          <NavBar/>
          <ViewPastes/>
        </div>
    }
  ] 
)
function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
