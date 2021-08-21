import './App.css';
import {useState} from 'react';

function App() {

  const [count, setcount] = useState(0);

  const addcount =()=>
  {
    setcount((prev=>prev+1));
  }

  const remcount =()=>
  {
    setcount((prev=>prev-1));
  }
  const rst =()=>
  {
    setcount(0);
  }

  return (
    <div className="App">
     <h1>COUNTER</h1>
     <div class="parentdiv">
      
      <div class="Circle">  
          <div class="new_row">
              <div class="Display">
                  <h2>{count}</h2>
              </div> 
          </div>
          <div class="new_row">
              <button class="startbtn" onClick={rst}>RESET</button>
          </div> 
           <div class="new_row">
               <button class="circlebtns leftbtn" onClick={addcount}>+</button>
               <button class="circlebtns rightbtn"onClick={remcount}>-</button>
           </div> 
      </div>
     
  </div>
    </div>
  );
}

export default App;
