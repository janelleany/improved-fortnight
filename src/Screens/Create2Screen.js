import React from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';

import Header from '../Components/Header';
import Buttons from '../Components/Buttons';
import AllContainer from '../Components/AllContainer';
import CreateFormPage2 from '../Components/CreateFormPage2';

let mapPropstoState = (state) => {
    return {all: state.pieces, alias: state.currentUser.alias}
}


let Create2Screen = ({all, history, alias}) => {
    return (
        <div className="create-screen">
            <p>The Create2Screen has rendered. And it contains:</p>
            <Header alias={alias}/>
            <Buttons />
            <AllContainer all={all}/>
            <CreateFormPage2 history={history}/>
        </div>
        );
    }

export default connect(mapPropstoState)(Create2Screen);