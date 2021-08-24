import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('uppercase was clicked'+text);
        setText(text.toUpperCase());
        props.setalert('Converted to upper case', 'success');
    }
    const handledownClick = () => {
        // console.log('uppercase was clicked'+text);
        setText(text.toLowerCase());
        props.setalert('Converted to lower case', 'success');
    }
    const handleOnchange = (event) => {
        // console.log('text data was changed');
        setText(event.target.value);
    }
    const handleClearclick = () => {
        setText('');
        props.setalert('Text Cleared!', 'success');
    }
    const handleCopy = () => {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.setalert('Text Selected to clipboard!', 'success');
    }
    const handleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setalert('Extra Spaces removed!', 'success');
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="mt-2">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" rows='8' id="mybox" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handledownClick}>Convert to lowercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Box</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes required to read whole paragraph</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter something above to preview'}</p>
            </div>
        </>
    );
}