import React from "react"
import { Route, Routes } from "react-router-dom"
import UserLayout from "./layout/UserLayout"
import Login from "./auth/Login"
import AutoScrollCards from "./cards/AutoScrollCards"
import Registration from "./auth/Registration"
import Events from "./user/Events"


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />} >
           <Route index element={<AutoScrollCards/>} />
           <Route path="/login" element={<Login></Login>}/>
           <Route path="/register" element={<Registration/>} />
           <Route path="/event" element={<Events/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
