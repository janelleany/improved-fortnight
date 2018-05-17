import React from 'react';
import { connect } from 'react-redux';

import '../styles/CreateForm.css';

import { createPieceFetch } from '../lib/api-calls';

import { createPiece } from '../lib/actions';
import { savePiece } from '../lib/actions';


let mapStateToProps = (state) => {
  return {
    newPiece: state.newPiece
  };
}



let mapDispatchToProps = (dispatch) => {
  return {
    createPiece: (specs) => dispatch(createPiece(specs)),
    savePiece: (data) => dispatch(savePiece(data))
  };
}

let date = Date();

class CreateFormPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'http://www.popecol.org/wp-content/uploads/2017/07/giraffe-at-lake-manyara.jpg',
      active: true,
      createddate: date
    }
  }

  changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({[property]: value});
  }

  clickDone = (event) => {
    let newPiece = this.props.newPiece;
    this.props.createPiece(this.state);
    createPieceFetch(newPiece)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {throw new Error(`Status Code: ${response.status}. Message: ${response.statusText}`) }
    })
    .then(data => {
      console.log(data);
      this.props.savePiece(data);})
    .catch(error => alert(error))
    this.props.history.push('/pieces');
  }

    render() {
      return (
          <div className="form-container">
            <p>I am the "upload sketch" form, and one day I'll be very pretty.</p>
            <button onClick={this.clickDone}>Done</button>
          </div>
        );
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormPage2);