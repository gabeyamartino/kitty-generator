import logo from './logo.svg';
import './App.css';
import KittyPic from './KittyPic.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [kittyURL, setKittyURL] = useState('')


  const fetchKitties = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3001/kitties'
    })
    .then((response) => {
      console.log(response)
      setKittyURL(response.data[0].url)
    })
  }

  useEffect(() => {
    fetchKitties()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h2>Click the Kitties!</h2>
        <h3>LFGGGG</h3>
        <KittyPic kittyURL={kittyURL} onClick={fetchKitties}/>
      </header>
    </div>
  );
}

export default App;
