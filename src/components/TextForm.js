import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    // console.log("UpperCase was Clicked "+ text);
    
    let newText = text.toUpperCase();
      
    // setText("You have clicked on handle up click");
    setText(newText);
    
    props.showAlert("Converted to UpperCase",'success');
    
    
  };
  const handleLowClick = ()=>{
    // console.log("UpperCase was Clicked "+ text);
    
    let newText = text.toLowerCase();
    
    // setText("You have clicked on handle up click");
    setText(newText);
    
    props.showAlert("Converted to LowerCase",'success');
  };
  
  const handleClearClick = ()=>{
    // console.log("UpperCase was Clicked "+ text);
    
    let newText = "";
    
    // setText("You have clicked on handle up click");
    setText(newText);
    props.showAlert("Successfully Cleared the text",'success');
  };
  
  const handleOnChange = (event)=>{
    // console.log("Handle onChange !!! ");
    setText(event.target.value);
  };
  
  
  const [text,setText] = useState('');
  
  // text = 'somesh is very intelligent' /// wrong way to change the text content 
  // setText("somesh is very intelligent");
  
  const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    
    props.showAlert("Successfully copied the text to clipboard",'success');
    
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "))
    
    props.showAlert("Successfully removed extra spaces",'success');
  }
  
  
  
  
  
  
  
  
  return (
    
    <>    
    <div className = "container " style={{color:props.mode === 'dark'?'white':'black'}}>
    {/* <h1>{props.heading} - {text} </h1> */}
    <h1>{props.heading} </h1>
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Somesh's textarea</label> */}
  <textarea className="form-control" value ={text} onChange ={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}}  id="myBox" rows="8" placeholder="Enter text here"></textarea>
</div>

<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
      
      
    </div>
    
    <div className = "container my-5" style={{color:props.mode === 'dark'?'white':'black'}} >
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words  {text.length} characters</p>
      <p  > {0.008 * text.split(" ").length} Minutes Read</p>
      
      <h2>Preview</h2>
      
      <p>{text.length>0?text:"Enter Something to preview here"}</p>
    </div>
    
    
    
    
  </>

  )
}
