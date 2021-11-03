
import './App.css';
import React,{ useState} from "react";


const App=()=> {
  const purple="#8e44ad";
  const[bg,setbg]=useState(purple);
  const[name,setname]=useState("Click Me");

  const bgChange=()=>{
    let newbg="#34495e";
    setbg(newbg);
    setname("yo 🐺");
  }
  const bgback=()=>{
    setbg("yellow");
    setname("click Me");
  }



  return (
   <>
   <div style={{background:bg}}>
   <button onMouseEnter={bgChange} onMouseLeave={bgback}>{name}</button>
   </div>

   </>
  );
}

export default App;
