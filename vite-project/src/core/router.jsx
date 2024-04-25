import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import HomePage from '../App';
import About from '../page/about';
import Menu from '../page/menu';

const Router = () => {
 return (
    <BrowserRouter>
<Routes>
    <Route path={"/"} element={<HomePage/>}/>
    <Route path={"/about"} element={<About/>}/>
    <Route path={"/menu"} element={<Menu/>}/>
</Routes>
  </BrowserRouter>
 );
};

export default Router;