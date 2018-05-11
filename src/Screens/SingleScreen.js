import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';
import Single from '../Components/Single';

let mapPropsToState = (state) => {
    return {all: state.queryList}
}

let SingleScreen = ({all, match}) => {
    let id = match.params.queryId;
    return (
        <div>
            <p>The SingleScreen has rendered. It contains:</p>
            <Header />
            <Single id={id} all={all}/>
        </div>
    );
}

export default connect(mapPropsToState)(SingleScreen);