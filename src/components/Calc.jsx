import React from 'react'


const calc = ({items,SetItems,setBData,setBAmount,setIsTrue,setGotId}) => {
  let total=0

// handleDelete
const handleDelete=(elemdel)=>{
SetItems(
  items.filter((elem)=>{
  return elem.id!=elemdel.id
     })
)

}


// handleEdit
const handleEdit=(elemedit)=>{
  setBData(elemedit.data)
  setBAmount(elemedit.amount)

  setIsTrue(false)
  setGotId(elemedit.id)
  


}

  // handleremoveall
const handleRemove=()=>{
  SetItems([])
  
}


  return (
    
<>

<div className='mainList'>
{
  items.map((elem)=>{
return (
  <div className='eachItem' key={elem.id}>
<div className='itemdata'>{elem.data}</div>
<div className='itemAmount'>{elem.amount}</div>
<button id='editbutton' onClick={()=>{handleEdit(elem)}}>edit</button>
<button id='deletebutton' onClick={()=>{handleDelete(elem)}}>delete</button>
    </div>
)
  })
}

<div className="total">
  {
    
    items.map((elem,id)=>{
      total+=Number(elem.amount)
   
      
    })

  }
 <span id='totalshow'>Total Expences Rs.{total}</span>
</div>
  <button className='Removebtn' onClick={handleRemove}>Remove all</button>
</div>
</>
    
    
  )
}

export default calc