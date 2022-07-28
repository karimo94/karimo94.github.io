import logo from './logo.svg';
import './App.css';
/**
 * cd locationtrack-d20, then npm start
 * npm run build - bundles the app into static files for prod
 * https://morioh.com/p/da0e736d82a3?f=5c21fb01c16e2556b555ab32&fbclid=IwAR0q9QjkN4KaZPLkVAn1bqHOnNdu0k9QIx1GIkI9EGGcnbdK7XD4wq6C_DM
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
