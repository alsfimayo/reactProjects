import { useState } from "react"


function App() {
  const [color,setColor]=useState('olive')
  const addBtn=()=>{
   return setColor('yellow')
  }
  const addBlack=()=>{
   return setColor('black')
  }
const addBrown=()=>setColor('brown')
const addOrange=()=>setColor('orange')
  

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-3xl">
          <button onClick={()=>{
            return setColor('red');
          }}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'green'}}>Green</button>
          <button onClick={addBtn} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'yellow'}}>Yellow</button>
          <button onClick={()=>setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={addBlack} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'black'}}>Black</button>
          <button onClick={()=>setColor('white')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{backgroundColor:'white'}}>White</button>
          <button onClick={()=>{
            return setColor('gray')
          }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'gray'}}>Gray</button>
          <button onClick={addBrown} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'brown'}}>Brown</button>
          <button onClick={addOrange} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'Orange'}}>Orange</button>
          <button onClick={()=>setColor('pink')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'pink'}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App