import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter, Route, Routes} from "react-router-dom";

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
    {/* <BrowserRouter> */}
      <Navbar mode={mode} toggleMode = {toggleMode}/>
      <Alert alert= {alert}/>
      <div className="container">
        {/* <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes> */}
          {/* <Route path="/" element={<Textform heading = "Text to be analysed below" mode={mode} showalert={showalert} />}/> */}
          <Textform heading = "Text to be analysed below" mode={mode} showalert={showalert} />
        {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
