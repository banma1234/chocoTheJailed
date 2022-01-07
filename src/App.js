import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import main from "./layOut/page/main";
import profile from "./layOut/page/profile";
import like from "./layOut/page/like";
import SideBar from "./layOut/sideBar/SideBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar></SideBar>
        <Routes>
          <Route path= "/" exact element = { main }></Route>
          <Route path= "/profile" element = { profile }></Route>
          <Route path= "/like" element = { like }></Route>
        </Routes>
      </BrowserRouter>
    </div>  // App
  );
}

// function Modal(){
//   let [poly, polyChange] = useState();
//   let [dollor, dollorChange] = useState(0);
//   const onChange = (event)=>{
//     dollorChange((event.target.value)*3);
//   }
//   return(
//     <div className = "modal">
//       <label htmlFor = "poly">polygon : </label>
//       <input id = "poly" placeholder = "polygon"
//       value = { poly } onChange={onChange}></input>
//       <h4>?•°(*Â°?–½Â°*)?•¯ polygon convert to...</h4>
//       <label htmlFor = "dollor">$ dollor : </label>
//       <input id = "dollar" value = {dollor}></input>
//     </div>
//   )
// }

export default App;