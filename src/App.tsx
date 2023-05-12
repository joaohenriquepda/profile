import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const API_URL = 'https://pokeapi.co/api/v2/pokemon';

  const [data, setData] = useState<any>(null); // Change 'any' to the expected data type


  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    console.log("AQUI");

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          {data?.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
