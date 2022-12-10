import Calc from "./components/Calc.jsx"
import { v4 as uuidv4 } from "uuid";

import {useEffect} from 'react'
import './App.css'
import { useState } from "react"





function App() {

// to set from local storage
const getLocalItems=()=>{
  let list=localStorage.getItem('lists')
  if(list){
  return JSON.parse(localStorage.getItem('lists'))
  
  }
  else{
    return [];
  }
  }





  const [bdata,setBData]=useState("")
  const [bamount,setBAmount]=useState("")
  const [items,SetItems]=useState(getLocalItems())
  const [istrue,setIsTrue]=useState(true)
  const[gotid,setGotId]=useState(null)




  // add data to local storage
  useEffect(() => {

    localStorage.setItem('lists',JSON.stringify(items))
  
  }, [items])


// handleAdd
const handleAdd=()=>{
if(bdata && bamount ){
  if(istrue){
    SetItems([...items,{data:bdata,amount:bamount , id: uuidv4()}])
    setBData("")
    setBAmount("")

  }
  else{
    SetItems(
      items.map((elem)=>{
       if(elem.id===gotid){
        return {...elem,data:bdata,amount:bamount}
       }
       return elem;
      })
    )
    setBData("")
    setBAmount("")
  }
  

  
}



}

  return ( 
<>
<div className="parent">
            <h1>Budget Calc</h1>
            <div className="child1">
                <input value={bdata} type="text" placeholder='enter data' onChange={(e)=>{setBData(e.target.value)}} />
                <input value={bamount} type="number" placeholder='enter amount' onChange={(e)=>{setBAmount(e.target.value)}} />

                {
                  istrue?<button className="btn" onClick={handleAdd}>Add</button>:<button className="btn" onClick={handleAdd}>Update</button>
                }
                
            </div>
        </div>



<Calc items={items} SetItems={SetItems} setBData={setBData} setBAmount={setBAmount} setIsTrue={setIsTrue} setGotId={setGotId}/>
</>
  
  )
}

export default App
