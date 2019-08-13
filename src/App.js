import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormPage from "./Component/FormPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <FormPage/>
      </section>
    </div>
  );
}

export default App;
