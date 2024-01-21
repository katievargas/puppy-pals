import React, {useState} from 'react';
import {puppyList} from './data.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

console.log(puppyList);

function App() {
  const [puppies,setPuppies] = useState(puppyList);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Puppy Pals</h1>
      <div>
        <h2>List of Puppies</h2>
        <ul>
          {puppies.map((puppy) => (
            <li key={puppy.id}>{puppy.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Name of Puppies</h2>
        <ul>
          {puppies.map((puppy) => (
            <li key={puppy.name}>{puppy.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
