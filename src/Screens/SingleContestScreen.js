import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';
import Contest from '../Components/Contest';

let mapPropsToState = (state) => {
    return {allContests: state.contestList}
}

let SingleContestScreen = ({allContests, match}) => {
    let path = match.path;
    let contestId = match.params.contestId;
    return (
        <div>
            <p>The SingleContestScreen has rendered. It contains:</p>
            <Header path={path}/>
            <Contest contestId={contestId} allContests={allContests}/>
        </div>
    );
}

export default connect(mapPropsToState)(SingleContestScreen);