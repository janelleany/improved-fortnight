import React from 'react';
import { connect } from 'react-redux';

import {toggleEditingContestAction} from '../lib/actions';

import '../styles/NewContestForm.css';

import Page1 from './NewContestFormPage1';
import Page2 from './NewContestFormPage2';
import ContestsContainer from './ContestsContainer';

let mapStateToProps = (state) => {
  return {
    displayNext: state.displayNext,
    editingContest: state.editingContest
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleEditingContestAction: (status) => dispatch(toggleEditingContestAction(status))
  }
}

let NewContestForm = ({displayNext, editingContest}) => {
  toggleEditingContestAction();
  if (!displayNext) {
    return (
        <Page1 />
    );
  } else if (displayNext && !editingContest) {
      return (
        <Page2/>
      );
    } else {
      return (
        <ContestsContainer />
      )
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewContestForm);