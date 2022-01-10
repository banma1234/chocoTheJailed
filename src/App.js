import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Main from "./layOut/SideBar/Main";
// import Profile from "./layOut/SideBar/Profile";
// import Like from "./layOut/SideBar/Like";
import SideBar from "./layOut/SideBar/SideBar";
import { Main, Profile, Like } from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar></SideBar>
        <Routes>
          <Route exact path= "/" element = { Main }></Route>
          <Route path= "/Profile" element = { Profile }></Route>
          <Route path= "/Like" element = { Like }></Route>
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
//       <h4>?��(*°?��°*)?�� polygon convert to...</h4>
//       <label htmlFor = "dollor">$ dollor : </label>
//       <input id = "dollar" value = {dollor}></input>
//     </div>
//   )
// }

export default App;