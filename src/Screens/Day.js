import React from 'react'
import Available from './Availability'
import {useState, useEffect} from 'react'
function Day() {
    const[dataList,setdataList]=useState({})
    const k=localStorage.getItem('ID')
    const l=localStorage.getItem('Date')
    const url="http://127.0.0.1:8000/slotbooking/"+k+l;
    useEffect(()=>{
    fetch(url)
  .then(response => response.json())
  .then(data => setdataList(data))
  
  },[])
  console.log(dataList);


    return (


        <>
        <div className='container slot-of-4'>
         <div className='row'>
         <div className='col-sm'>
             <Available props='0'></Available>
         </div>
         <div className='col-sm'>
             <Available props='1'/>
         </div>
         <div className='col-sm'>
         <Available props='0'/>
         </div>
         <div className='col-sm'>
         <Available props='1'/>
         </div>
         </div>
     
        </div>
        <div className='container slot-of-4'>
         <div className='row'>
         <div className='col-sm'>
             <Available props='0'></Available>
         </div>
         <div className='col-sm'>
             <Available props='1'/>
         </div>
         <div className='col-sm'>
         <Available props='0'/>
         </div>
         <div className='col-sm'>
         <Available props='1'/>
         </div>
         </div>
     
        </div>
         
     
            
       
        </>
       )
}

export default Day