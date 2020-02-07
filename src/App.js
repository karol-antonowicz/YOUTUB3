import React from 'react';
import { Home } from './components/Home/Home';
import { AppLayout } from './components/AppLayout/AppLayout';
import { Watch } from './containers/Watch/Watch';
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux';

const API_KEY = `${process.env.REACT_APP_API_KEY}`
console.log(API_KEY)

const App = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path='/watch' component={Watch} />
        <Route path='/' component={Home} />
      </Switch>
    </AppLayout>
  );
}

export default App;
