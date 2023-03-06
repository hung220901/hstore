import GoogleMapReact from 'google-map-react';
import React from 'react' 
export default function Map() {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{key:'AIzaSyAwGs_xE-Te7s-TzCvqjW-UaXljSiVQGUY'}}
      defaultCenter={{ lat: 59.95, lng: 30.33 }}
      defaultZoom={11} 
    >
   </GoogleMapReact>
  )
}
