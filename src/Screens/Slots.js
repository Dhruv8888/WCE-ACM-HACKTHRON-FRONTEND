import React from 'react'
import { useEffect,useState } from 'react'
import '../Screens/Slot.css'
import Available from '../Screens/Availability'
import Day from './Day'


function Slot() {
    const[dataList,setdataList]=useState([])
    useEffect(()=>{
    fetch('')
  .then(response => response.json())
  .then(data => setdataList(data))

  },[])
  const [date,setDate]=useState("no")
  console.log(date);
  return(
    <>
    <div>
    <input className='custom'  type='date' onChange={(e)=>setDate(e.target.value)}></input>
   </div>
   {localStorage.setItem('Date',JSON.stringify(date))}
    {date==="no"?<div></div>:<div><Day props={date}/></div>}
    </>
  )
 
}

export default Slot