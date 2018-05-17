import React from 'react';
import { connect } from 'react-redux';

import { processLoginFetch } from '../lib/api-calls';
import { login } from '../lib/actions';

import '../styles/App.css';


let mapDispatchToProps = (dispatch) => {
  return { login: (credentials) => dispatch(login(credentials)) };
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }     
  }

  changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({[property]: value});
  }

  clickLogin = (event) => {
    event.preventDefault();
    processLoginFetch(this.state)
    .then(user => {
      return user.json();
    })
    .then(user => {
      if (user.token) {
        localStorage.setItem('authorization', user.token);
        this.props.login(this.state);
        this.props.history.push('/pieces');
      } else {
        alert("Unable to log you in. Maybe try again?");
      }
    })
    .catch(error => alert(error.message));
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.clickLogin}>
      
        <p>I am the "login form" and one day I'll be very pretty</p>

        <label><input type="email" size="100" required placeholder="email" name="email" id="email" onChange={this.changeHandler} /></label>
        <label><input type="password" size="100" required placeholder="password" name="password" id="password" onChange={this.changeHandler} /></label>

        <label> <input type="submit" name="submit" value="Log me in" /></label>

      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);