import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15) 
  
  let [message, setMessage] = useState("Your value is 15.")
  /* There are multiple hooks in React. */

  // let counter = 15
 
  const addValue = () => {
    if(counter < 20){ 
      console.log("value added", counter)
      counter = counter + 1
      setCounter(counter)
      setMessage(`Your value is ${counter}`)
    } 
    else{
      setMessage("Can't go above 20.")
    }
  }
  const removeValue = () => {
    if(counter > 0){
      setMessage(`Your value is ${counter-1}`)
      setCounter(counter - 1)
    }
    else{
      setMessage("Can't go below zero")
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button 
      onClick={removeValue}>Remove Value</button>
      <p> footer: {message} </p>
    </>
    /*All this thing is running well in console but UI is not updating.
    The power of UI updation is with react. React hooks come in handy
    while dealing with the application UI.*/
  )
}

export default App
