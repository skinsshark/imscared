import { useState } from 'react';
import './App.css';

const Crowd = ({ numOfPeople }: { numOfPeople: number }) => {
  const people = Array.from({ length: numOfPeople });
  return (
    <div className="crowd">
      {people.map((_, i) => (
        <h3 key={i}>{Math.random() < 0.5 ? '🧍‍♀️' : '🧍'}</h3>
      ))}
    </div>
  );
};

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

      <div className="me-wrapper">
        <div className="me">
          <p>me</p>
        </div>
      </div>
    </div>
  );
}

export default App;
