import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './Main.jsx'
import  withRoot  from './withRoot'
 
// const {app} = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path = "/" component = { Main } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withRoot(App);
