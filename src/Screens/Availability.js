import React from 'react'
import '../Screens/Availability.css'
function notAvailable(){
alert("Sorry Not  available")
}
function isAvailable(){
  
}
function Available(props) {
   console.log(props)
  return (
    <div style={{height:'5em',width:'10em'}} className='card '>
    <span>{props.time}</span>
    {props.props===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={isAvailable} className='btn btn-primary'> Book Now</button></div>} 
</div>
  )
}

export default Available