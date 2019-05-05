import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Description from "./Description";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header name="TESS" />
      </header>
      <Description countBy={3} />
    </div>
  );
};

export default App;
