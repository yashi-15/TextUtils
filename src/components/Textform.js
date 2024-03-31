import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");
  const handleonchange = (event) => {
    console.log("handle on change called");
    setText(event.target.value);
  };
  const handleUpCase = () => {
    console.log("text to upper case : " + Text);
    setText(Text.toUpperCase());
  };
  const handleLoCase = () => {
    console.log("text to lower case : " + Text);
    setText(Text.toLowerCase());
  };
  const handleAltCase = () => {
    var word = Text
    var str =""
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        str = word.charAt(i).toUpperCase();
        word  = word.slice(0, i) + str + word.slice(i + 1);
      } else {
        str = word.charAt(i).toLowerCase();
        word  = word.slice(0, i) + str + word.slice(i + 1);
      }
    }
    setText(word);
  };
  const handleInverseCase = () => {
    var word =  Text;
    var str = ""
    for (let i = 0; i < Text.length; i++) {
      if(Text.charAt(i) === Text.charAt(i).toLowerCase()){
        str=Text.charAt(i).toUpperCase();
        word  = word.slice(0, i) + str + word.slice(i + 1);
      }else if (Text.charAt(i) === Text.charAt(i).toUpperCase()){
        str =Text.charAt(i).toLowerCase();
        word  = word.slice(0, i) + str + word.slice(i + 1);
      }
    }
    setText(word);
  };
  const handleCopyTxt = () => {
    var text = document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text Copied !", "success")

  };
  const handleClearTxt = () => {
    console.log("Text cleared");
    setText("");
  };
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <textarea
          className={`form-control ${props.mode === "dark" ? "text-bg-secondary":"text-bg-light"}`}
          value={Text}
          onChange={handleonchange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button
          type="button"
          disabled = {Text.length===0?true:false}
          onClick={handleUpCase}
          className="btn btn-primary m-3"
        >
          {" "}
          UPPERCASE
        </button>
        <button
          type="button"
          disabled = {Text.length===0?true:false}
          onClick={handleLoCase}
          className="btn btn-primary m-3"
        >
          {" "}
          lowercase
        </button>
        <button
          type="button"
          disabled = {Text.length===0?true:false}
          onClick={handleAltCase}
          className="btn btn-primary m-3"
        >
          {" "}
          AlTeRnAtE cAsE
        </button>
        <button
          type="button"
          disabled = {Text.length===0?true:false}
          onClick={handleInverseCase}
          className="btn btn-primary m-3"
        >
          {" "}
          INveRSe CaSe
        </button>
        <button
          type="button"
          disabled = {Text.length===0?true:false}
          onClick={handleCopyTxt}
          className="btn btn-primary m-3"
        >
          {" "}
          Copy Text
        </button>
        <button
          type="button"
          disabled = {Text.length===0?true:false}
          onClick={handleClearTxt}
          className="btn btn-primary m-3"
        >
          {" "}
          Clear Text
        </button>
      </div>
      <div className="container mt-5">
        <h3>Your Text Summary Here</h3>
        <p>
          {" "}
          {Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} letters
        </p>
        <p>Average read time: {0.005 * Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes.</p>
        <h4>Preview</h4>
        <p className={`${props.mode === "dark" ? "text-bg-primary":"bg-primary-subtle"} p-3`}> {Text}</p>
      </div>
    </> 
  );
}
