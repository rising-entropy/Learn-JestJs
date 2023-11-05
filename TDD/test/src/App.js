import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [state, setState] = useState({})

  useEffect(()=>{
    axios.get('https://asia-south1-reqapproval-407cf.cloudfunctions.net/api')
    .then((response)=>{
      setState(response.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }, []);

  useEffect(()=>{
    axios.post('https://asia-south1-reqapproval-407cf.cloudfunctions.net/api/repos', {
      "url": "https://github.com/rising-entropy/SwiftTransit-Back-Dev",
      "name": "Swift Transit Backend"
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response)=>{
        console.log(response.data)
      })
      .catch((e)=>{
        console.log(e)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {JSON.stringify(state)}
        </p>
      </header>
    </div>
  );
}

export default App;
