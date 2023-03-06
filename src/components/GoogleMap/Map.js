import GoogleMapReact from 'google-map-react';
import React from 'react' 
const Store = ({ text }) => <div className="absolute w-[60px] h-[40px] -left-[40px] -top-[40px] border-solid border-[5px] border-[#f44336] rounded-[20px] bg-white text-center text-[#3f51b5] text-[16px] font-bold p-1" >{text}</div>;
export default function Map() {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{key:'AIzaSyAwGs_xE-Te7s-TzCvqjW-UaXljSiVQGUY'}}
      defaultCenter={{ lat: 10.7728, lng: 106.6983 }}
      defaultZoom={9} 
      hoverDistance={30}
      yesIWantToUseGoogleMapApiInternals
    >
       <Store
          lat={10.632384907404221}
          lng={106.73641864305847} 
          text="Store" 
        /> 
   </GoogleMapReact>
  )
}
