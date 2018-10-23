import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css'
import '../css/index.css'



import FlickrExplore from '../components/FlickrExplore'
import FlickrTagContainer from './FlickrTagContainer'
import FlickrPhotoContainer from './FlickrPhotoContainer'

import FlickrPhoto from '../components/FlickrPhoto'
import Header from '../components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={FlickrExplore} />
          <Route exact path="/photos" component={FlickrTagContainer} />
          <Route path="/explore" component={FlickrExplore} />
          <Route path="/photos/:id" component={FlickrPhotoContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;