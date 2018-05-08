import React from 'react';

import Header from '../Components/Header';
import Contest from '../Components/Contest';

let SingleContestScreen = (props) => {
    return (
        <div>
            <p>The SingleContestScreen has rendered. It contains:</p>
            <Header path={props.match.path}/>
            <Contest />
        </div>
    );
}

export default SingleContestScreen;