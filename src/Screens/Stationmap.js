import React from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Manpage from './Mappage'
import './stationmap.css'
import { useState, useEffect } from 'react';
function Stationmap() {
  const[dataList,setdataList]=useState({})
  useEffect(()=>{
  fetch('http://127.0.0.1:8000/stationRegister/')
.then(response => response.json())
.then(data => setdataList(data))

},[])
console.log(dataList);
function Selected(name){
  console.log("hehe")
  alert(name)
  localStorage.setItem(name,JSON.stringify(name));
  window.location="/Slots";
}
  return (

   

    <div className='rootdiv'>

     <div className='rootdiv2'>
        <h1 className='heading2'>Nearest Station</h1> 
        <hr></hr>
        <h2>Check out the store in your area</h2>
        <h2 className='text'>Click below to view Business hours.</h2>
        <hr></hr>
        <div className='pdot'>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
       <span className="dot"></span>
       </div>
       <div>content to be loading..... </div>
       <hr></hr>
       {Object.keys(dataList).map((key) => {
      return (
        <div>
        <button style={icon}>
       <AddLocationAltIcon size="large"/>
       </button>
     
       <div style={butdiv}>{dataList[key].station_name} <button style={button} onClick={()=>Selected(dataList[key].stationid)}>Select 
       </button></div>
       
    </div>
      )
    })}
       

       
     </div>

     <div>
     <Manpage></Manpage>
     </div>

    </div>
  )
}
const button = {
    width: 125,
    padding: 5,
    borderRadius: 10,
    marginLeft:60,
    margin: 10,
    cursor: "pointer",
    fontSize: 17,
    color: "white",
    backgroundColor: "#9D27CD",
    border: "none",
  };
  const icon={
    padding:10,
    borderRadius: 10,
    cursor: "pointer",
    backgroundColor: "DC143C",
    border: "none",
  }
  const butdiv= {
    display:'inline',
    width: 5,
    height:200,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    fontSize: 17,
    color: "white",
    backgroundColor: "#222",

  };

export default Stationmap