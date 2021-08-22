import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked'+text);
        setText(text.toUpperCase());
    }
    const handleOnchange = (event)=>{
        // console.log('text data was changed');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here')
    return (
        <div>
            <h1 className="m-2">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" rows='8' id="mybox" value ={text} onChange={handleOnchange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    );
}