import React, { useState } from 'react';
import { puppyList } from './data.js';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
    <h1>Puppy Pals</h1>
      <div className="section">
      <div>
        <h2>List of Puppies</h2>
        <ol>
          {puppies.map((puppy) => (
            <li key={puppy.id}>{puppy.name}</li>
          ))}
        </ol>
      </div>
      </div>

      <div className="section">
      <div>
        <h2>Puppy Names</h2>
        <ol>
          {puppies.map((puppy) => (
            <li key={puppy.id}>{puppy.name}</li>
          ))}
        </ol>
      </div>
      </div>

      <div className="section">
        <div className="App">
          <h2>Get To Know The Puppies</h2>
          {puppies.map((puppy) => (
            <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
              {puppy.name}
            </p>
          ))}
          {featPupId && (
            <div>
              <h2>{featuredPup.name}</h2>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;