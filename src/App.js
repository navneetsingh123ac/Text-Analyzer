import Navbar from './component/Navbar';
import './App.css';
import TextInput from './component/TextInput';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light')
  const Toggle = ()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.background = '#4b415a';
    }
    else{
      setMode('light')
      document.body.style.background = 'white';
    }
  }
  return (
   <>
   <Navbar toggle={Toggle} mode = {Mode}/>
   <div className="container">
   <TextInput mode = {Mode}/>
   </div>
   
   </>
  );
}

export default App;
