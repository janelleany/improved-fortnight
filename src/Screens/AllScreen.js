import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';
import Buttons from '../Components/Buttons';
import AllContainer from '../Components/AllContainer';

let mapPropstoState = (state) => {
    return {all: state.queryList}
}


let AllScreen = ({all}) => {
    return (
        <div className="all-screen">
            <p>The AllScreen has rendered. And it contains:</p>
            <Header />
            <Buttons />
            <AllContainer all={all} />
        </div>
        );
    }

export default connect(mapPropstoState)(AllScreen);