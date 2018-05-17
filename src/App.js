import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import AllScreen from './Screens/AllScreen';
import SingleScreen from './Screens/SingleScreen';
import Create1Screen from './Screens/Create1Screen';
import Create2Screen from './Screens/Create2Screen';
import ReservationScreen from './Screens/ReservationScreen';
import PricingScreen from './Screens/PricingScreen';
import FAQScreen from './Screens/FAQScreen';
import AboutScreen from './Screens/AboutScreen';
import ContactScreen from './Screens/ContactScreen';
import ForgotScreen from './Screens/ForgotScreen';


let App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={SignupScreen}/>
        <Route path="/login" component={LoginScreen}/>
        <Route path="/pieces" exact component={AllScreen}/>
        <Route path="/pieces/:id" component={SingleScreen}/>
        <Route path="/new/piece/1" component={Create1Screen}/>
        <Route path="/new/piece/2" component={Create2Screen}/>
        <Route path="/pricing" component={PricingScreen}/>
        <Route path="/faq" component={FAQScreen}/>
        <Route path="/about" component={AboutScreen}/>
        <Route path="/contact" component={ContactScreen}/>
        <Route path="/new/reservation" component={ReservationScreen}/>
        <Route path="/forgot" component={ForgotScreen}/>
      </div>
    </Router>
  );
}

export default App;
