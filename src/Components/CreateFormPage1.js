import React from 'react';
import { connect } from 'react-redux';

import '../styles/CreateForm.css';

import { createQuery } from '../lib/actions';

let mapStateToProps = (state) => {
  return {
    creatorId: state.currentUser.canvasId
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    createQuery: (specs) => dispatch(createQuery(specs))
  };
}

class CreateFormPage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasId: "",
      description: "",
      style: "",
      placement: "",
      color: "",
      type: "",
      size: "",
      experience: "",
      zip: "",
      radius: "",
      timing: ""
    }
        
  }

  changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({[property]: value});
  }

  clickNext = (event, specs) => {
    event.preventDefault();
    this.props.createQuery(this.state);
    this.props.history.push('/new/query/2');
  }

  componentDidMount() {
    this.setState({
      canvasId: this.props.creatorId
    });
  }

    render() {
      
      return (
        <form className="form-container" onSubmit={this.clickNext}>
          <p>I am the "create a new query form" and one day I'll be very pretty</p>
          <label><input type="text" size="50" required placeholder="Describe your vision" name="description" id="description" onChange={this.changeHandler} /></label>
          
          <label><select required name="style" id="style" onChange={this.changeHandler} >
            <option default>tattoo style</option>
            <option>3D</option>
            <option>American Traditional</option>
            <option>Biomechanical</option>
            <option>Black and Grey</option>
            <option>Blackwork</option>
            <option>Dotwork</option>
            <option>Geometric</option>
            <option>New School</option>
            <option>Pin-up</option>
            <option>Traditional Japanese</option>
            <option>Trash Polka</option>
            <option>Tribal</option>
            <option>Watercolor</option>
            <option>I don't know</option>
          </select></label>

          <label><select required name="placement" id="placement" onChange={this.changeHandler} >
            <option default>body placement</option>
            <option>Chest</option>
            <option>Upper Arm</option>
            <option>Lower Arm</option>
            <option>Hand</option>
            <option>Back</option>
            <option>Upper Leg</option>
            <option>Lower Leg</option>
            <option>Foot</option>
            <option>Ribs</option>
            <option>Stomach</option>
            <option>Intimate</option>
            <option>I don't know</option>
          </select></label>

          <label><select required name="color" id="color" onChange={this.changeHandler} >
            <option default>color vs black</option>
            <option>Color</option>
            <option>Black</option>
            <option>I don't know</option>
          </select></label>

          <label><select required name="type" id="type" onChange={this.changeHandler} >
            <option default>artistic license?</option>
            <option>I bow to your genius</option>
            <option>I have a very specific vision</option>
          </select></label>

          <label><select required name="size" id="size" onChange={this.changeHandler} >
            <option default>size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Sleeve or Cover</option>
            <option>I don't know</option>
          </select></label>

          <label><select required name="experience" id="experience" onChange={this.changeHandler} >
            <option default>first tattoo?</option>
            <option>First-timer</option>
            <option>Not my first rodeo</option>
          </select></label>

          <label><select required name="timing" id="timing" onChange={this.changeHandler} >
            <option default>time frame</option>
            <option>Let's go!</option>
            <option>Within 30 days</option>
            <option>Still thinking about it</option>
          </select></label>

          <label><input type="number" min="10000" max="99999" required placeholder="zip" name="zip" id="zip" onChange={this.changeHandler} /></label>

          <label>5 mi<input type="radio" name="radius" value="5" onChange={this.changeHandler} /></label>
          <label>10 mi<input type="radio" name="radius" value="10" onChange={this.changeHandler} /></label>
          <label>25 mi<input type="radio" name="radius" value="25" onChange={this.changeHandler} /></label>

          <label> <input type="submit" name="submit" value="Next ==>" /></label>

        </form>
      );
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormPage1);