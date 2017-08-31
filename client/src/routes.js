import React from 'react';
import ReactDOM from 'react-dom';
// import Provider from 'react-redux';
// import { createStore } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './containers/Home';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <App>
          <Route path="/" component={Home}></Route>
        </App>
      </Switch>
    </BrowserRouter>
  )
}
