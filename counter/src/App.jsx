import { useState } from "react"

function App() {
  const[value,setValue]= useState( )

  const addValue= ()=>{
    setValue(value+1)
  }

  const subValue= ()=>{
  
    setValue(value-1)
    if(value==0){
       setValue(0)
    }
  }
  return (
    <>
    <h1>Code</h1>
    <h2>Counter value:{value}</h2>
    <button onClick={addValue}>Add value</button><br/>
    <button onClick={subValue}>Sub value</button>
    </>
  )
}

export default App
