import React,{useState}  from 'react'

export default  function TextForm(props){
   const handleUpClick =()=>{
       console.log("upper case was clicked"+ text);
       let newText = text.toUpperCase();
       setText(newText);
   }  
   const handleOnClick =()=>{
    console.log("lower case was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
}  

const clearText =()=>{
    let newText = text.trim();
    setText(newText);
}
   

   const handleOnchange =(event)=>{
       console.log("on chnage");
       setText(event.target.value);
   }
   
    const [text, setText] = useState("Enter text here");
   
    return(
        <>
        <div className="container">
            <div className="mb-3">
                <label htmlFor="mybox" className="form-lable">{props.heading}</label>
                <textarea className="form-control"  value={text} onChange={handleOnchange}   id="exmpleForm" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleOnClick}  >convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearText}  >cleaar text</button>
        </div>
        <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        </div>
        <h3>preview</h3>
        <p>{text}</p>
        </>    
    )

}