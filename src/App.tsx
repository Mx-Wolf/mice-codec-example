import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { makeDemo } from './example';

function App() {
  const [text, setText] = useState('Не готово еще!')
  useEffect(() => {
    let flag = false;
    makeDemo().then((data)=>{
      if(!flag){
        setText(JSON.stringify(data));
      }
    })
    .catch((err)=>{
      if(!flag){
        setText(`${err}`);
      }
    })
    return () => {
      flag = true;
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h2>чё? правда?!</h2>
        <p>{text}</p>
      </main>
    </div>
  );
}

export default App;
