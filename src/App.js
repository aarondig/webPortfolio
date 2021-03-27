import "./App.css";
import Wrapper from "./components/Wrapper";
import Landing from "./components/Landing";
import { useRef, useLayoutEffect, useEffect, useState } from "react";

function App() {
  const scroller = useRef();
  const [page, setPage] = useState();

  let position = 0;
  let rounded = 0;
  let speed = 0;

  const data = {
    current: 0,
    previous: 0,
    rounded: 0,
    ease: .2
    
  }
  

  window.addEventListener("wheel", (e) => {
    speed = e.deltaY * 0.0005;
  });

  const scrolling = () => {
    position += speed;

    //INERTIA: speed less than 1
    speed *= 0.8;
    rounded = Math.round(position);
    console.log(position)
    if (position < 0) {
      position = 0;
    }
    if (position > 4) {
      rounded = 4;
    }
    let difference = rounded - position;

   
    //SLIDE BACK SPEED
    position += difference * 0.05;
    
    // PAGE TRANSITION: -Math.pow((position - PAGENUM), 2) + PAGENUM

    scroller.current.style.transform = `translateY(-${position*100}vh)`;
    setPage(rounded);
    requestAnimationFrame(() => scrolling());
  };

  useEffect(() => {
    scrolling();
  }, []);

  return (
    <div className="App">
      <div id="scroller" ref={scroller}>
      <Landing />
      <div className="page"></div>
      </div>
    </div>
  );
}

export default App;
