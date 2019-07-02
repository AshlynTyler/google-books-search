import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {Search, Saved} from "./components";

class App extends React.Component {

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
            <Route
              exact path='/'
              render={(props) => <Search {...props} results={this.state.results} />}
            />
            <Route
              exact path='/saved'
              render={(props) => <Saved {...props} results={this.state.saved} />}
            />
          </div>
        </Router>

      </>
    );
  }
}

export default App;
