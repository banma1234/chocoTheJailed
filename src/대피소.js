import React, { useState } from 'react';

import MainLayout from './LayOut/Main';
import './App.css';

function App() {

  let [title,titleChange] = useState(['머니케이스 맛있게 먹는 법', 
  '샤워크림으로 샤워하는 법', '멈춰']);
  let [like, likeChange] = useState(0);

  return (
    <div className="App">

    <div className = "body">
      <Modal></Modal>
      <div className = "list">
        <h4> { title[0] } <span onClick={ ()=>{ likeChange(like + 1) } }>👍</span> { like } </h4>
        <p>이 쓰발럼아 ~~</p>
        <hr></hr>
        <h4> { title[1] } </h4>
        <p>알기쉬운 물리 알수없음
        </p>
        <hr></hr>
        <h4> { title[2] } </h4>
        <p>의미없는 항쟁은 그만</p>
      </div>
    </div>

    </div>  // App
  );
}

function Modal(){
  let [poly, polyChange] = useState();
  let [dollor, dollorChange] = useState(0);
  const onChange = (event)=>{
    dollorChange((event.target.value)*3);
  }
  return(
    <div className = "modal">
      <label htmlFor = "poly">polygon : </label>
      <input id = "poly" placeholder = "polygon"
      value = { poly } onChange={onChange}></input>
      <h4>╰(*°▽°*)╯ polygon convert to...</h4>
      <label htmlFor = "dollor">$ dollor : </label>
      <input id = "dollar" value = {dollor}></input>
    </div>
  )
}

export default App;