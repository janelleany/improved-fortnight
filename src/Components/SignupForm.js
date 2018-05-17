import React from 'react';

import { createAccountFetch } from '../lib/api-calls';

import '../styles/App.css';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      alias: '',
      password: '',
      type: ''
    }     
  }

  changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({[property]: value});
  }

  clickSignup = (event) => {
    event.preventDefault();
    createAccountFetch(this.state)
    .then(response => {
      response.json();
      this.props.history.push('/login');
    });
  }

  render() {
    return (
      <div className='form-container'>
      <form className='login-form' onSubmit={this.clickSignup}>
      
        <p>I am the "create a new account form" and one day I'll be very pretty</p>

        <label><input type="email" size="100" required placeholder="email" name="email" id="email" onChange={this.changeHandler} /></label>
        <label><input type="text" size="100" required placeholder="alias" name="alias" id="alias" onChange={this.changeHandler} /></label>
        <label><input type="text" size="100" required placeholder="password" name="password" id="password" onChange={this.changeHandler} /></label>
        
        <label><select required name="type" id="type" onChange={this.changeHandler} >
          <option value='tattooers' default>I am a tattooer looking to show a piece</option>
          <option value='collectors'>I am a collector looking to get tattooed</option>
        </select></label>

        <label> <input type="submit" name="submit" value="Create My Account" /></label>

      </form>
      </div>
    );
  }
}

export default SignupForm;