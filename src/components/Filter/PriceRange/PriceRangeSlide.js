import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";



const PriceRangeSlide = ({ min , max ,onChange }) => {
  const STEP = 1; 
  const [values, setValues] = useState([min, max]);

  const handleValuesChange = (newValues) => {
    setValues(newValues);
    onChange(newValues);
  };


  return (
    <Range
      values={values}
      step={STEP}
      min={0}
      max={1000}
      onChange={handleValuesChange}
      renderTrack={({ props, children }) => ( 
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "10px",
            display: "flex",
            width: "100%"
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#000", "#ccc"],
                min: 0,
                max: 1000
              }),
              alignSelf: "center"
            }}
          >
            {children}
          </div> 
        </div>
      )}
      renderThumb={({ index, props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "22px",
            width: "22px", 
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
            borderRadius:'99rem'
          }}
        > 
          <div
            style={{
              position: 'absolute',
              top: '-28px',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '14px',
              fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
              padding: '3px',
              borderRadius: '4px',
              backgroundColor: '#000'
            }}
          >
            {values[index]}
          </div>
          <div
            style={{
              height: "5px",
              width: "5px",
              backgroundColor: isDragged ? "#000" : "#CCC"
            }}
          /> 
        </div>
      )}
    />
  );
};
export default PriceRangeSlide;