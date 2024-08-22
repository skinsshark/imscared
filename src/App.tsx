import { useState } from 'react';
import Crowd from './Crowd';
import './App.css';

function App() {
  const [numOfPeople, setNumOfPeople] = useState(0);
  return (
    <div className="page-wrapper">
      <header>
        <h1>i'm going to get stage fright</h1>
        <div className="options">
          <div className="input-wrapper">
            <p>number of people: </p>
            <input
              type="number"
              min={0}
              value={numOfPeople}
              onChange={(e) => setNumOfPeople(parseInt(e.target.value))}
            />
          </div>
        </div>
      </header>

      <Crowd numOfPeople={numOfPeople} />

      <div className="you-wrapper">
        <div className="you">
          <p>you</p>
        </div>
      </div>
    </div>
  );
}

export default App;
