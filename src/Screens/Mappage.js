import React from 'react'
import {GoogleMap,useJsApiLoader} from '@react-google-maps/api';


const containerStyle={
    width:'700px',
    height:'700px',
};

const lati=16.8524;
const langi=74.5815;

function Mappage() {
  const center={
    lat:lati,
    lng:langi
};
  const {isLoaded}=useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey:"AIzaSyChykMQlbWKcQy-qixkVnXCrGVoy-vdlM4"
  })
  const [map,setMap]=React.useState(null)

  const onLoad= React.useCallback(function callback(map) { 
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds (bounds);
    setMap(map)
  },[])

  const onUnmount = React.useCallback(function callback(map) { setMap(null)
},[])


return isLoaded ? ( 
   <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    Zoom={10}    
    onLoad={onLoad}
    onUnmount ={onUnmount}
    >
      <h1>Hello World</h1>
     <></>
     </GoogleMap>):
     <></>   
}

export default React.memo(Mappage)