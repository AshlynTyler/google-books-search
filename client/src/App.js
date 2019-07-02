import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {Search, Saved} from "components.js";

class App extends React.Component() {

  state = {
    results: [],
    saved: []

  }


  render(){
    return (
      <>
        <div className = "flex-container" id="nav-bar">
          <div id = "nav-title"> Google Books</div>

          <div id = "nav-search">Search</div>

          <div id = "nav-saved">Saved</div>
        </div>

        <h1>Google Books Search</h1>

        <h3>Search for and Save Books of Interest</h3>

        <Router>
          <div>
            <Route exact path ="/" component={Search} />
            <Route exact path ="/saved" component={Saved} />
          </div>

        </Router>

      </>
    );
  }
}

export default App;
