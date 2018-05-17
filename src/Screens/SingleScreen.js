import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';
import Single from '../Components/Single';

let mapPropsToState = (state) => {
    return {all: state.pieces, alias: state.currentUser.alias}
}

let SingleScreen = ({all, alias, match}) => {
    let id = match.params.id;
    return (
        <div>
            <p>The SingleScreen has rendered. It contains:</p>
            <Header alias={alias}/>
            <Single id={id} all={all}/>
        </div>
    );
}

export default connect(mapPropsToState)(SingleScreen);