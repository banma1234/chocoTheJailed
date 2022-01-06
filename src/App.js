import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
        <Switch>
          <Route path= "/" exact component = { main }></Route>
          <Route path= "/" component = { profile }></Route>
          <Route path= "/" component = { like }></Route>
        </Switch>
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
//       <h4>╰(*°▽°*)╯ polygon convert to...</h4>
//       <label htmlFor = "dollor">$ dollor : </label>
//       <input id = "dollar" value = {dollor}></input>
//     </div>
//   )
// }

export default App;