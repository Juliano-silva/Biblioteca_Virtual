import React from "react"
import { BrowserRouter as Router,Route,Link,Routes } from "react-router-dom"
import BottomTabsNavigation from "./Components/BottomTabsNavigation"
import Books from "./Components/Links/Books"
import Add from "./Components/Links/Add"
export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/Add" element={<Add/>}/>
      </Routes>
      <BottomTabsNavigation/>
    </Router>
  )
}