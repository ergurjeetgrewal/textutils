import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState("light");//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const setalert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#26273a';
      setalert('Dark Mode has been enabled','success');
      document.title = "Textutils Home - darkmode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      setalert('Light Mode has been enabled','success');
      document.title = "Textutils Home"
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <TextForm heading = "Enter the text below to analyze" setalert={setalert} mode={mode} />
    {/* <About/> */}
    </>
  );
}
export default App;
 