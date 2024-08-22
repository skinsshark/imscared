import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <header>
        <h1>i'm going to get stage fright</h1>
        <div className="options">
          <div className="input-wrapper">
            <p>number of people: </p>
            <input type="number" min={0} />
          </div>
          <div className="camera-control-wrapper">
            <p>cameras out? </p>
            <p>yes / no</p>
          </div>
        </div>
      </header>

      <article>
        <p>you</p>
      </article>
    </div>
  );
}

export default App;
