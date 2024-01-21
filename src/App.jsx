import React, { useState } from 'react';
import { puppyList } from './data.js';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';

console.log(puppyList);

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    // some logic here
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log("featuredPup: ", featuredPup);

  return (
    <>
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
        <h2>Puppy Names</h2>
        <ul>
          {puppies.map((puppy) => (
            <li key={puppy.name}>{puppy.name}</li>
          ))}
        </ul>
      </div>

      
      <div className="App">
        {puppies.map((puppy) => (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
