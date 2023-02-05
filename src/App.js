import './App.css';
import LandingPage from './landing-page';
import { useState } from 'react';

function App() {  
  const  [username, setUsername] = useState('N/A');

  return (
    <div className="App">
      <LandingPage username={username}/>
    </div>
  );

}

export default App;
