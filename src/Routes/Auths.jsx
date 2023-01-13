import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from '../pages/History';
import Trips from '../pages/Trips';
import List from '../pages/List';
import Home from '../pages/Home';
import Asistence from '../pages/Asistence';

const Auths = () => {
  return (
    <div>


    <BrowserRouter>

      <Routes>

        <Route index element={<Home/>}></Route>
        
         <Route path="/Home" element={<Home />}></Route>

        <Route path="/history" element={<History />}></Route>
        <Route path="/trips" element={<Trips />}></Route>

        <Route path="/list" element={<List />}></Route>
        <Route path="/asistence" element={<Asistence />}></Route>






      </Routes>







    </BrowserRouter>
  </div>  )
}

export default Auths