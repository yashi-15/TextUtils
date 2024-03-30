import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

function App() {  
  const  [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showalert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{setAlert(null)},2000);
  };
  const toggleMode = ()=>{
    if (mode === "light"){
      console.log("changing mode")
      setMode("dark")
      document.body.classList.remove( 'text-bg-light' )
      document.body.classList.add('text-bg-dark')
    }
    else{
      console.log("changing mode")
      setMode("light")
      document.body.classList.remove( 'text-bg-dark' )
      document.body.classList.add('text-bg-light')
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode = {toggleMode}/>
      <Alert alert= {alert}/>
      <div className="container">
        <Textform heading = "Text to be analysed below" mode={mode} showalert={showalert} />
      </div>
    </>
  );
}

export default App;
