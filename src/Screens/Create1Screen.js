import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';
import Buttons from '../Components/Buttons';
import AllContainer from '../Components/AllContainer';
import CreateFormPage1 from '../Components/CreateFormPage1';

let mapPropstoState = (state) => {
    return {all: state.pieces, alias: state.currentUser.alias}
}


let Create1Screen = ({all, alias, history}) => {
    return (
        <div className="create-screen">
            <p>The Create1Screen has rendered. And it contains:</p>
            <Header alias={alias}/>
            <Buttons />
            <AllContainer all={all} />
            <CreateFormPage1 history={history}/>
        </div>
        );
    }

export default connect(mapPropstoState)(Create1Screen);