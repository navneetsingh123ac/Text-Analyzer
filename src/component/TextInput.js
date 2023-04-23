import React from 'react'
import { useState } from 'react'
export default function TextInput(props) {
  const [text , settext] = useState("Enter Your Text Here");

  const Uppercase = ()=>{
    let newtext = text.toUpperCase();
    settext(newtext);
  }
  const Lowercase = ()=>{
    let newtext = text.toLowerCase();
    settext(newtext);
  }
  const Clear = ()=>{
   
    settext("");
  }
  const Update=(event)=>{
    settext(event.target.value)
 }

  return (
    <>
    <div className="textarea" style={{color:props.mode === 'dark'? 'white':'black'}}>
        <h2><b>Please Enter Your Text to Analyze</b></h2>
       <textarea className="form-control" value ={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}
        id="exampleFormControlTextarea1" onChange={Update} rows="8"></textarea>
       <button className="btn btn-primary" onClick={Uppercase}>Conver into Uppercase</button>
       <button className="btn btn-primary mx-3" onClick={Lowercase}>Conver into Lowercase</button>
       <button className="btn btn-primary " onClick={Clear}>clear</button>
   </div>
    <div className="about my-3" style={{color:props.mode === 'dark'? 'white':'black'}}>
      <h2><b>About your Text</b></h2>
      <p>your text has {text.length} characters and {text.split(" ").length} words</p>
      <h2><b>Preview your Text</b></h2>
      <p>{text}</p>
      <h2><b>Reading Time</b></h2>
      <p>reading time of this text for average person is:- {0.008 * text.split(" ").length} minute</p>
    </div>
    </>
  )
}
