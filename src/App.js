import logo from './logo.svg';
import ContentLoader from 'react-content-loader'

import './App.css';
import { useState } from 'react';
import Card from "./component/Card"

function App() {

  const[now,Setnow]= useState(0)
  const[rcolor,UpdateColor]= useState("blue")

function increaseValue(){
  if(now<10){
    Setnow(now+1) 
  }
}

  return (
    <div className='scalaton'>
      <h1 style={{color:rcolor}}>{now}</h1>
      <button onClick={()=>Setnow(0)}>incresse 1</button>
      <button onClick={increaseValue}>CHANCE COLOR</button>
      <Card name="card" mcolor="red" />
      <Card name="ashish"mcolor="blue" />
    </div>
  );
}

export default App;
