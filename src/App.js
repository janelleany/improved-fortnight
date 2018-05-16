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
        <Route path="/all/:id" component={SingleScreen}/>
        <Route path="/new/piece/1" component={Create1Screen}/>
        <Route path="/new/piece/2" component={Create2Screen}/>
        {/* <Route path="/new/purchase" component={PurchaseScreen}/> */}
      </div>
    </Router>
  );
}

export default App;
