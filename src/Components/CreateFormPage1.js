import React from 'react';
import { connect } from 'react-redux';

import '../styles/CreateForm.css';

import { createPiece } from '../lib/actions';

let mapStateToProps = (state) => {
  return {
    id: state.currentUser.id
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    createPiece: (specs) => dispatch(createPiece(specs))
  };
}

class CreateFormPage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tattooerid: null,
      caption: null,
      style: null,
      color: null,
      size: null,
      price: null,
      deposit: null,
      zip: null,
    }
        
  }

  changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({[property]: value});
  }

  clickNext = (event, specs) => {
    event.preventDefault();
    this.props.createPiece(this.state);
    this.props.history.push('/new/piece/2');
  }

  componentDidMount() {
    this.setState({
      tattooerid: this.props.id
    });
  }

    render() {
      
      return (
        <form className="form-container" onSubmit={this.clickNext}>
          <p>I am the "create a new piece form" and one day I'll be very pretty</p>
          
          <label><input type="text" size="50" required placeholder="Describe your vision" name="caption" id="caption" onChange={this.changeHandler} /></label>
          
          <fieldset onChange={this.changeHandler}>
            <legend>Choose the style most appropriate for this piece</legend>
            <label>3D<input type='checkbox' name='style' value='3D'/></label>
            <label>American Traditional<input type='checkbox' name='style' value='American Traditional'/></label>
            <label>Biomechanical<input type='checkbox' name='style' value='Biomechanical'/></label>
            <label>Black and Grey<input type='checkbox' name='style' value='Black and Grey'/></label>
            <label>Blackwork<input type='checkbox' name='style' value='Blackwork'/></label>
            <label>Dotwork<input type='checkbox' name='style' value='Dotwork'/></label>
            <label>Geometric<input type='checkbox' name='style' value='Geometric'/></label>
            <label>New School<input type='checkbox' name='style' value='New School'/></label>
            <label>Pin-up<input type='checkbox' name='style' value='Pin-up'/></label>
            <label>Traditional Japanese<input type='checkbox' name='style' value='Traditional Japanese'/></label>
            <label>Trash Polka<input type='checkbox' name='style' value='Trash Polka'/></label>
            <label>Tribal<input type='checkbox' name='style' value='Tribal'/></label>
            <label>Watercolor<input type='checkbox' name='style' value='Watercolor'/></label>
            <label>Illustrative/Hyper-Realistic<input type='checkbox' name='style' value='Illustrative/Hyper-Realistic'/></label>
          </fieldset>

<fieldset onChange={this.changeHandler}>
            <legend>Choose color type appropriate for this piece</legend>
            <label>Black<input type='checkbox' name='color' value='Black'/></label>
            <label>Color<input type='checkbox' name='color' value='Color'/></label>
            <label>Either<input type='checkbox' name='color' value='Color'/></label>
            </fieldset>

          <fieldset onChange={this.changeHandler}>
            <legend>Choose the size most appropriate for this piece</legend>
            <label>Small<input type='checkbox' name='size' value='Small'/></label>
            <label>Medium<input type='checkbox' name='size' value='Medium'/></label>
            <label>Large<input type='checkbox' name='size' value='Large'/></label>
            <label>X-Large<input type='checkbox' name='size' value='X-Large'/></label>
            <label>Sleeve<input type='checkbox' name='size' value='Sleeve'/></label>
            <label>Cover<input type='checkbox' name='size' value='Cover'/></label>
            </fieldset>
          

          <label><input type='number' min='1' required placeholder='price' name='price' id='price' onChange={this.changeHandler} /></label>

          <label>Choose deposit amount<select required name='deposit' id='deposit' onChange={this.changeHandler} >
            <option default>select</option>
            <option value='25'>USD$25</option>
            <option value='50'>USD$50</option>
          </select></label>
          
          <label>Where are you?<input type="number" min="10000" max="99999" required placeholder="zip" name="zip" id="zip" onChange={this.changeHandler} /></label>

          
          <label> <input type="submit" name="submit" value="Next ==>" /></label>

        </form>
      );
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormPage1);