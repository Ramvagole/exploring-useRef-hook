import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value,setval]=useState("")
  let data1=useRef()
  let input1=useRef()
  function display(){
    setval(input1.current.value)
    
  }
  useEffect(()=>{
    input1.current.focus()
  },[])
  function changeBackgroundColor(){
    data1.current.style.backgroundColor="red"
  }
  return (
    <>
      <input type="text" ref={input1} onChange={display}/>
      <h3>{value}</h3>
      <button ref={data1} style={{backgroundColor:"black",color:'white'}} onClick={changeBackgroundColor}>click</button>
    </>
  )
}

export default App
