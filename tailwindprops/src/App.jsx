import Card from './Card'
import './index.css'

function App() {
  let myObj = {
    name:"rohit",
    age:12,
  }
  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   <Card data={myObj}/>
   </>
  )
}

export default App
