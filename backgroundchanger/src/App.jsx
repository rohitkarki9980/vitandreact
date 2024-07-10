import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("Green");
  let colorsName = ["Red", "Green", "Blue","Orange","Purple","Indigo"];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 rounded-xl shadow-lg bg-white px-3 py-2">
          {colorsName.map((colorsName, index) => {
            return (
            <button 
            className="px-4 py-2 bg-gray-200 rounded"
            key={index} onClick={()=>setColor(colorsName)}
            style={{backgroundColor:colorsName}}
            >
            {colorsName}
            </button>
          )
          })}
        </div>
      </div>
    </div>
  );
}
