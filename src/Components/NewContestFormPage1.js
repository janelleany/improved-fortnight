import React from 'react';
import { connect } from 'react-redux';

import '../styles/NewContestForm.css';

import { newContestAction } from '../lib/actions';

import { toggleDisplayNextAction } from '../lib/actions';

let mapStateToProps = (state) => {
  return {
    creatorId: state.currentUser.canvasId
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    newContestAction: (contestDetails) => dispatch(newContestAction(contestDetails)),
    toggleDisplayNextAction: () => dispatch(toggleDisplayNextAction())
  };
}

class NewContestFormPage1 extends React.Component {
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

  clickNext = (event) => {
    this.props.displayNextAction();
    event.preventDefault();
  }

  clickDone = (event) => {
    this.props.setEditModeAction()
    this.props.newContestAction(this.state);
  }

  componentDidMount() {
    this.setState({
      canvasId: this.props.creatorId,

    });
  }

    render() {
      return (
        <form className="new-contest-container" onSubmit={this.submitHandler}>
        <p>I am the "create a new contest form" and one day I'll be very pretty</p>
          <label for="description"><input type="text" size="50" required placeholder="Describe what you want" name="description" id="description" onChange={this.changeHandler} /></label>
          
          <label for="style"><select required name="style" id="style" onChange={this.changeHandler} >
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

          <label for="placement"><select required name="placement" id="placement" onChange={this.changeHandler} >
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

          <label for="color"><select required name="color" id="color" onChange={this.changeHandler} >
            <option default>color vs black</option>
            <option>Color</option>
            <option>Blacks</option>
            <option>I don't know</option>
          </select></label>

          <label for="type"><select required name="type" id="type" onChange={this.changeHandler} >
            <option default>artistic license?</option>
            <option>Do you</option>
            <option>Specific</option>
          </select></label>

          <label for="size"><select required name="size" id="size" onChange={this.changeHandler} >
            <option default>size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Sleeve or Cover</option>
            <option>I don't know</option>
          </select></label>

          <label for="experience"><select required name="experience" id="experience" onChange={this.changeHandler} >
            <option default>first tattoo?</option>
            <option>First-timer</option>
            <option>Old Pro/Hat / Not my first rodeo</option>
          </select></label>

          <label for="timing"><select required name="timing" id="timing" onChange={this.changeHandler} >
            <option default>time frame</option>
            <option>Let's go!</option>
            <option>Within 30 days</option>
            <option>Still thinking about it</option>
          </select></label>

          <label for="zip"><input type="number" min="10000" max="99999" required placeholder="zip" name="zip" id="zip" onChange={this.changeHandler} /></label>

          <label>5 mi<input type="radio" name="radius" value="5" onChange={this.changeHandler} /></label>
          <label>10 mi<input type="radio" name="radius" value="10" onChange={this.changeHandler} /></label>
          <label>25 mi<input type="radio" name="radius" value="25" onChange={this.changeHandler} /></label>

          <label for="submit"> <input type="submit" name="submit" value="Next ==>" onClick={this.clickNext} /></label>

        </form>
      );
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewContestFormPage1);