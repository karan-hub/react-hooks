import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter , setCounter  ] = useState(0)

 
 
  const addvalue = () => {
 
    if (!(counter >= 20)) {
      setCounter(counter + 1)
      // console.log(counter);
   
   }
     
  }

  const removeValue =()=>{
    if(!(counter <= 0)){
    //  console.log(counter);
      setCounter(counter -1 )
    
     }
  }
  return (
    <>
      <h1>hello react bhai</h1>
      <h3>Counter value :{counter}</h3>
      <button onClick={addvalue} > Add {counter}</button>
      <br />
      <button  onClick={removeValue}> remove value</button>
      <p>{counter }  </p>

    </>
  )
}

export default App
