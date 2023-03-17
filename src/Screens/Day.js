import React from 'react'
import Available from './Availability'
import {useState, useEffect} from 'react'
function Day(props) {
    const[dataList,setdataList]=useState({})
    const k=localStorage.getItem('ID')
    const l=props.props
    const url="http://127.0.0.1:8000/slotbooking/"+6+"/"+l;
    console.log("hehe")
    console.log(url)
    useEffect(()=>{
    fetch(url)
  .then(response => response.json())
  .then(data => setdataList(data))
  
  },[])
  console.log("This is a data Comeing");
  console.log(dataList);
  localStorage.setItem("data",JSON.stringify(dataList))
  function isAvailable(k){
    if(k===1) dataList[0].slot1=false;
    if(k===2) dataList[0].slot2=false;
    if(k===3) dataList[0].slot3=false;
    if(k===4) dataList[0].slot4=false;
    if(k===5) dataList[0].slot5=false;
    if(k===6) dataList[0].slot6=false;
    if(k===7) dataList[0].slot7=false;
    if(k===8) dataList[0].slot8=false;
    if(k===9) dataList[0].slot9=false;
    if(k===10) dataList[0].slot10=false;
    if(k===11) dataList[0].slot11=false;
    if(k===12) dataList[0].slot12=false;
    Object.fromEntries(dataList)
    console.log("This is a data Going")
    console.log(dataList)
    fetch("http://127.0.0.1:8000/slotBookingPost/",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dataList)
    }).then((res)=>{
        console.log(res);
    })

  }
  function notAvailable(){
    alert('already Booked')
  }

    return (


        <>
       {Object.keys(dataList).map((key) => 
        <div>
        <div className='container slot-of-4'>
         <div className='row'>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot1===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(1)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot2===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(2)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot3===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(3)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot4===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(4)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         </div>
     
        </div>
        <div className='container slot-of-4'>
         <div className='row'>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot5===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(5)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot6===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(6)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot7===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(7)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot8===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(8)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         </div>
     
        </div>
        <div className='container slot-of-4'>
         <div className='row'>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot9===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(9)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot10===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(10)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot11===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(11)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         <div className='col-sm'>
         <div style={{height:'5em',width:'10em'}} className='card '>
    <span>10:30</span>
    {dataList[key].slot12===false?<div><button className='btn btn-danger' onClick={notAvailable}>Already Book </button></div>:<div><button onClick={()=>isAvailable(12)} className='btn btn-primary'> Book Now</button></div>} 
</div>
         </div>
         </div>
     
        </div>
        </div>
      
    )}
        
         
     
            
       
        </>
       )
}

export default Day