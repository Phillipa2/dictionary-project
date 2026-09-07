import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword = "colonel"/>
      </main>
      <footer className="App-footer"><small>This project was coded by Phillipa Atieno and is <a href="https://github.com/Phillipa2/dictionary-project" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and <a href="https://dictionary-react-project-app.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>.</small></footer>
      </div>
    </div>
  );
}

