import { useRef, useState } from 'react';
import './App.css';

const Crowd = ({ numOfPeople }: { numOfPeople: number }) => {
  const people = Array.from({ length: numOfPeople });
  return (
    <div className="crowd">
      {people.map((_, i) => (
        // <h3 key={i}>{Math.random() < 0.5 ? '🧍‍♀️' : '🧍'}</h3>
        <div className="person" key={`person-${i}`}>
          <img
            draggable="false"
            src={Math.random() < 0.5 ? '/person.png' : '/person2.png'}
            alt="person"
          />
        </div>
      ))}
    </div>
  );
};

const CrowdControl = ({
  numOfPeople,
  setNumOfPeople,
}: {
  numOfPeople: number;
  setNumOfPeople: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onDecrease = () => {
    setNumOfPeople((val) => Math.max(0, val - 1));
  };

  const onIncrease = () => {
    setNumOfPeople((val) => val + 1);
  };

  return (
    <div className="input-wrapper">
      <button className={numOfPeople === 0 ? 'hide' : ''} onClick={onDecrease}>
        -
      </button>
      <input
        ref={inputRef}
        type="number"
        min={0}
        value={numOfPeople}
        onSelect={() => {
          if (inputRef.current) {
            inputRef.current.select();
          }
        }}
        onChange={(e) =>
          e.target.value === ''
            ? setNumOfPeople(0)
            : setNumOfPeople(parseInt(e.target.value))
        }
      />
      <button onClick={onIncrease}>+</button>
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
            <p># of people: </p>
            <CrowdControl
              numOfPeople={numOfPeople}
              setNumOfPeople={setNumOfPeople}
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
