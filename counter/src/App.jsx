import { useState } from "react"

function App() {
  const[value,setValue]= useState(0)

  const addValue= ()=>{
    setValue(value+1)
  }

  const subValue= ()=>{
  
    setValue(value-1)
    if(value==0){
       setValue(0)
    }
  }
  const resetValue= ()=>{
  
    setValue(0)
  
  }
  return (
    <>
    <h1>Code</h1>
    <h2>Counter value:{value}</h2>
    <button onClick={addValue}>Add value</button><br/>
    <button onClick={subValue}>Sub value</button><br/> 
    <button onClick={resetValue}>Reset value</button>
    </>
  )
}

export default App
