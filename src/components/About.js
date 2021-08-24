import React, {useState} from 'react'

export default function About() {
    const [mystyle, setMystyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        }
    )
    const [BtnText, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = ()=>{
        if(mystyle.color === 'black'){
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    return (
        <div className='container my-2' style={mystyle}>
            <div className="card text-center" style={mystyle}>
                <h1>About Us</h1>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
                <button className="btn btn-primary my-2" onClick={toggleStyle}>{BtnText}</button>
        </div>
    )
}
