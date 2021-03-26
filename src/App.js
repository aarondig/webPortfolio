import './App.css';
import { useRef, useLayoutEffect, useEffect, useState } from 'react';

function App() {
const scroller = useRef();

const [touch, setTouch] = useState(false)


  let position = 0;
  let rounded = 0;
  let speed = 0;

  
  window.addEventListener('wheel', (e)=>{
    speed = e.deltaY * .0005
   })



  

  const scrolling = () => {
    
  position += speed;

  //INERTIA: speed less than 1
  speed *=.8;
  
  rounded = Math.round(position);
  
  let difference = (rounded - position);
 
  //SLIDE BACK SPEED
  position += difference*.05;
  scroller.current.style.transform = `translate3d(0, ${position*100}px, 0)`
  
  console.log(difference)

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
