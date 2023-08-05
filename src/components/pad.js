import React, { useRef } from "react";
import './pad.css';

const Pad = ({ onClick, active, instrumentName, soundUrl }) => {
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    onClick();
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <div>
        <button className={`btn button-gradient button-one ${active ? "active" : ""}`} onClick={handleButtonClick}>
          {instrumentName}
        </button>
        <audio ref={audioRef} src={soundUrl} />
      </div>
    </div>
  );
};

export default Pad;
