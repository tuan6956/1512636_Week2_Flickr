 import React from 'react';
 import ReactDOM from 'react-dom';
 import FlickrExplore from './components/FlickrExplore'
 import FlickrTag from './components/FlickrTag'
 import FlickrPhoto from './components/FlickrPhoto'

 import Header from './components/Header'

 import 'bootstrap/dist/css/bootstrap.min.css';
 import {
    BrowserRouter,
    Route,
    Switch,
    } from 'react-router-dom'
 ReactDOM.render(

    <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={FlickrExplore} />
            <Route exact path="/photos" component={FlickrTag} />
            <Route path="/explore" component={FlickrExplore} />
            <Route path="/photos/:id" component={FlickrPhoto} />
        

    </div>
  </BrowserRouter>
    // <BrowserRouter>
    //     <Switch>
    //         <Route exact path="/" component={Main} />
    //         <Route path="/about" component={App}/>
    //     </Switch>
    // </BrowserRouter>
    , 
    document.getElementById('root')
);
