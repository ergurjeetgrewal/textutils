import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked'+text);
        setText(text.toUpperCase());
    }
    const handledownClick = ()=>{
        // console.log('uppercase was clicked'+text);
        setText(text.toLowerCase());
    }
    const handleOnchange = (event)=>{
        // console.log('text data was changed');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here')
    return (
        <>
        <div className="container">
            <h1 className="mt-2">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" rows='8' id="mybox" value ={text} onChange={handleOnchange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handledownClick}>Convert to lowercase</button>
        </div>
        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008*text.split(' ').length} Minutes required to read whole paragraph</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
}