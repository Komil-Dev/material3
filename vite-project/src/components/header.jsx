import React from 'react';
import { NavLink } from 'react-router-dom';

const Headerjs = () => {
 return (
  <div style={{backgroundColor:"black",color:"white",padding:3, width:"100%", height:"5vh"}}>
 <div style={{display:"flex",gap:12, justifyContent:"center"}}>
  <NavLink style={{color:"#fff"}} to={"/"}>Home</NavLink>
  <NavLink style={{color:"#fff"}} to={"/menu"}>Menu</NavLink>
  <NavLink style={{color:"#fff"}} to={"/about"}>About</NavLink>
 </div>
  </div>
 );
};

export default Headerjs;