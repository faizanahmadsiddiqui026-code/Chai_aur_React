import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15
  const addValue = () =>{
    // console.log("value added", Math.random());
    counter=counter +1;
    setCounter(counter);
  }

  const removeValue = () =>{
    if(counter<=0) setCounter(0);
    else setCounter(counter - 1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
