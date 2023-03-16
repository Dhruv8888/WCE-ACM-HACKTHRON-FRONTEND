import React from 'react'
import '../Screens/Availability.css'
function Available(props) {
   console.log(props)
  return (
    <div style={{height:'5em',width:'10em'}}className='card '>
    <span>10:30am</span>
    {props.props==1?<div><button className='btn btn-danger'>Already Book </button></div>:<div><button className='btn btn-primary'> Book Now</button></div>} 
</div>
  )
}

export default Available