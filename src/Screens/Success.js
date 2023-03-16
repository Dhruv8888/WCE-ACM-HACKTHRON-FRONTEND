
import React from 'react'
function Success() {
  return (
    <body style={{textAlign:"center",padding:"40px 0",background:"#EBFOF5"}}>
    <div>
      <div class="card">
      {/* <div style={{borderRadius:"200px",height:"200px",width:"200px",background:"#F8FA5",margin:"0 auto"}}> */}
        <i className="checkmark">✓</i>
        {/* </div>     */}
        <h1 style={{color:"#88B04B",fontFamily:"Nunito Sans,Helvetica Neue,sans-serif",fontWeight:"900",fontSize:"40px",marginBottom:"10px"}}>Success</h1> 
        <p>your Slot is booked<br/> we'll be in touch shortly!</p>
        
        <div style={{marginTop:"20px"}}>
        <h1>Name:</h1>
        Slot: <br></br>
        Date: <br></br>
        Station : <br></br>
        </div>
  
      </div>
     
    </div>
    </body>
  )
}

export default Success;