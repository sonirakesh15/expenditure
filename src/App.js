import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom'
import { About, Contact } from './routes/route';


/** create header */
function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://cd.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}


function MainApp() {
  return (
    <div className="App">
      < Header />
      <BrowserRouter>
        {/* <Switch> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        {/* </Switch> */}
      </BrowserRouter>

    </div>
  )
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://cd.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <MainApp />
  );
}

export default App;
