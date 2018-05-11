import React from 'react';
import { connect } from 'react-redux';

import '../styles/CreateForm.css';

import { createQuery } from '../lib/actions';
import { saveQuery } from '../lib/actions';


let mapDispatchToProps = (dispatch) => {
  return {
    createQuery: (specs) => dispatch(createQuery(specs)),
    saveQuery: () => dispatch(saveQuery())
  };
}

class CreateFormPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryId: "Seth",
      images: ["http://www.popecol.org/wp-content/uploads/2017/07/giraffe-at-lake-manyara.jpg"]
    }
        
  }

  changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({[property]: value});
  }

  clickDone = (event) => {
    this.props.createQuery(this.state);
    this.props.saveQuery();
    this.props.history.push('/all');
  }

    render() {
      return (
          <div className="form-container">
            <p>I am the "upload inspiration pics" form, and one day I'll be very pretty.</p>
            <button onClick={this.clickDone}>Done</button>
          </div>
        );
      }
    }

export default connect(null, mapDispatchToProps)(CreateFormPage2);