import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SideBar, SnsBar, PriceCoin, Comments} from "./layOut"
import {Main, Profile, Like, Settings, Cards, Detail, NotFound} from "./pages";

//yeh
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar></SideBar>
        <Routes>
          <Route path = "/" element = { <Main/> }></Route>
          <Route path = "/pages/Profile" element = { <Profile/> }></Route>
          <Route path = "/pages/Like" element = { <Like/> }></Route>
          <Route path = "/pages/Settings" element = { <Settings/> }></Route>
          <Route path = "/pages/Cards" element = { <Cards/> }></Route>
          <Route path = "/pages/Detail" element = { <Detail/> }></Route>
          <Route path = "/*" element = { <NotFound/> }></Route>
        </Routes>
      </BrowserRouter>
      <SnsBar/>
    </div>  // App
  );
}

export default App;