import './App.css';
import { useRef, useLayoutEffect, useEffect } from 'react';

function App() {
const scroller = useRef();


  let current = 0;
  let previous = 0;
  let rounded = 0;
  let ease = .2;

  const scrolling = () => {
  current = window.scrollY;
  previous += (current - previous) * ease;
  rounded = Math.round(previous * 100) / 100;

  scroller.current.style.transform = `translate3d(0, ${rounded}px, 0)`
  
  
  console.log(rounded)
  requestAnimationFrame(()=> scrolling());
  }
  useEffect(()=>{
    scrolling();
    },[])

  return (
    <div className="App">
      <div className="scroller" ref={scroller}></div>
    </div>
  );
}

export default App;
