import React, { Component, useRef } from "react";
import './pad.css';
import { useEffect } from "react";

class Pad extends React.Component {
  handleTimerFired() {
    alert("timer fired!");
  }



  constructor (){
    super();
    element = Pad.current;
    element.addEventListener("timerFired", alert);
  }

  render(){
  return (
    <div>
      <div>
        <button className={'btn button-gradient button-one'}/>
      </div>
    </div>
  );
  }
};

export default Pad;
