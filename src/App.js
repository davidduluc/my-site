import logo from './logo.svg';
import me from './me.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={me} className="profile-pic" alt="logo" />
        <p>
          David Duluc - Software Engineer
        </p>
      
        <a
          className="App-link"
          href="https://www.linkedin.com/in/davidduluc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn here.
        </a>
        <p>
          More content coming soon!
        </p>
      </header>
    </div>
  );
}

export default App;
