import { useState } from 'react';
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import ReactDOM from 'react-dom';




function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [butText, setButText] = useState('black');
  const [alert, setAlert] = useState('This is an alert');

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    });

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('black');
      setButText('light');
      showAlert("Dark Mode has been enabled", "success");
      document.body.style.backgroundColor = 'black';
      document.body.style.Color = 'white';
    }
    else {
      setMode('light');
      setButText('black');
      showAlert("Light Mode has been enabled", "success");
      document.body.style.backgroundColor = 'white';
      document.body.style.Color = '#212529';

    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" aboutText="About MyApp" homeTab="My Home" mode={mode} toggleMode={toggleMode} butText={butText} />
        {/* <Routes> */}
          {/* <Route path="/" element={ */}
            <div className="container my-3" toggleMode={toggleMode}>
            <TextForm heading="Enter your text below to Analyze" mode={mode} />
            </div>
          {/* }/> */}

          {/* <Route path="/about" element={
            <About mode={mode}/>
          } />
        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  )
}

export default App;
