import React from 'react';
import { connect } from 'react-redux';

import '../styles/NewContestForm.css';

import { newContestAction } from '../lib/actions';
import { toggleEditingContestAction } from '../lib/actions';
import { toggleDisplayNextAction } from '../lib/actions';

let mapStateToProps = (state) => {
  return {
    displayNext: state.displayNext,
    editingContest: state.editingContest
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    newContestAction: (contestDetails) => dispatch(newContestAction(contestDetails)),
    toggleEditingContestAction: () => dispatch(toggleEditingContestAction()),
    toggleDisplayNextAction: () => dispatch(toggleDisplayNextAction())
  };
}

class NewContestFormPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
        
  }

  changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({[property]: value});
  }

  clickDone = (event) => {
    this.props.newContestAction(this.state);
    this.props.toggleEditingContestAction();
    this.props.toggleDisplayNextAction();
  }

    render() {
      return (
          <div className="new-contest-container">
            <p>I am the "upload inspiration pics" form, and one day I'll be very pretty.</p>
            <button onClick={this.clickDone}>Done</button>
          </div>
        );
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(NewContestFormPage2);