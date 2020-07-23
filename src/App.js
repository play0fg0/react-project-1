import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tehnologies from './Tehnologies.js';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';



const App = () => {
  return (
    /* <div className="name"></div> */
    <div className="app-wrapper">
      {/* <Header />
      <Tehnologies />
       */}
      <Header />
      <Navbar />
      <Profile />

    </div>
  );
}

export default App;


/* function App() {
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

export default App; */
