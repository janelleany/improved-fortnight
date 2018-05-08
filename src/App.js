import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomepageScreen from './Screens/HomepageScreen';
import HomepageLoginScreen from './Screens/HomepageLoginScreen';
import ContestsScreen from './Screens/ContestsScreen';
import SingleContestScreen from './Screens/SingleContestScreen';


let App = () => {
  return (
    <Router>
      <div className="router">
        <Route path="/" exact component={HomepageScreen}/>
        <Route path="/login" component={HomepageLoginScreen}/>
        <Route path="/contests" exact component={ContestsScreen}/>
        <Route path="/contests/:contestId" component={SingleContestScreen}/>
        <Route path="/new/contest" component={ContestsScreen}/>
        <Route path="/new/submission" component={ContestsScreen}/>
      </div>
    </Router>
  );
}

export default App;
