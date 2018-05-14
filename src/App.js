import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import AllScreen from './Screens/AllScreen';
import SingleScreen from './Screens/SingleScreen';
import Create1Screen from './Screens/Create1Screen';
import Create2Screen from './Screens/Create2Screen';
import SubmitScreen from './Screens/SubmitScreen';


let App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={SignupScreen}/>
        <Route path="/login" component={LoginScreen}/>
        <Route path="/all" exact component={AllScreen}/>
        <Route path="/all/:queryid" component={SingleScreen}/>
        <Route path="/new/query/1" component={Create1Screen}/>
        <Route path="/new/query/2" component={Create2Screen}/>
        <Route path="/new/submission" component={SubmitScreen}/>
      </div>
    </Router>
  );
}

export default App;
