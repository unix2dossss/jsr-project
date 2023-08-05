import React, { Component, useRef, useState } from "react";
import './pad.css';
import { useEffect } from "react";
function Pad({time}) {
  const [buttonState, setButtonState] = useState(false)

  useEffect(() => {
    if(buttonState) {
      // This is on state and trigger every time time change
      console.log(`Play a sound when button is on at: ${time}`)
      // 
    }

  }, [time, buttonState])
  return (
    <div>
      <div>
        <button className={'btn button-gradient button-one'} onClick={()=> {
          setButtonState((previousState) => {return !previousState})
        }}/>
      </div>
    </div>
  );
}

export default Pad;
