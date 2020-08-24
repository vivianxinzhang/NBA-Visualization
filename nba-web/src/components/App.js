import React from 'react';
import logo from "../assets/images/nba-logoman.svg";
import TopNavBar from "./TopNavBar";
// import logo from './logo.svg';
import '../styles/App.css'
// import './App.css';

function App() {
  return (
    <div className="App">
        <TopNavBar></TopNavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
