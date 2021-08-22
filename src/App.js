import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container">
    <TextForm heading = "Enter the text below to analyze"/>
    </div>
    </>
  );
}
export default App;
 