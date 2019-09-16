import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
           Keeping this default content here to help track how tokens and resources can be established and used.
          <p>My Token = {window.token}</p>*/}
        <p>
        <a className="App-link" href="login">Sign In</a> or <a className="App-link" href="register">Create an Account</a>
        </p>
      </header>
    </div>
  );
}

export default App;
