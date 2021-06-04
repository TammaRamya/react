
import './App.css';
import Name from  './name';
import Time from './timer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <Name/>
        <Time/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
