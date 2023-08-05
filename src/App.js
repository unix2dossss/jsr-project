import {useState, useEffect} from 'react'
import './App.css';
import Pad from './components/pad';

// Timer to generate event every second
// Button to listen to time event
//  If it's on, play a sound
//  If it's off, do nothing

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function App() {

  const [time, setTime] = useState(0)

  useEffect(() => {    sleep(1000).then(() => {
    setTime((previousTime) => {return previousTime + 1})
  })} , [time])

  useEffect(() => {
    // Doing something
    // Check the button state
    console.log(`Timing log`)
    // 
  }, [time])
  return (
    <div className="App">
      <Pad time={time}/>
    </div>
  );
}

export default App;
