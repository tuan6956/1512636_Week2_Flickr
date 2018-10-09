import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlickrExplore from './components/FlickrExplore'

class App extends Component {
  componentDidMount() {
    console.log(this.props.location.search) // "?filter=top&origin=im"
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;