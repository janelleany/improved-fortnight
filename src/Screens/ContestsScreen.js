import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';
import ContestsButtons from '../Components/ContestsButtons';
import ContestsContainer from '../Components/ContestsContainer';
import NewSubmissionForm from '../Components/NewSubmissionForm';
import NewContestForm from '../Components/NewContestForm';

let mapPropstoState = (state) => {
    return {allContests: state.contestList}
}


let ContestsScreen = ({allContests, match}) => {
    let path = match.path;
    if (path === '/new/contest') {
        return (
            <div className="contests-screen">
                <p>The ContestsScreen has rendered. It contains:</p>
                <Header path={path}/>
                <ContestsButtons />
                <ContestsContainer allContests={allContests}/>
                <NewContestForm />
            </div>
        );
    } else if (path === '/new/submission') {
        return (
            <div className="contests-screen">
                <p>The ContestsScreen has rendered. And it contains:</p>
                <Header path={path}/>
                <ContestsButtons />
                <ContestsContainer allContests={allContests}/>
                <NewSubmissionForm />
            </div>
        );
    } else {   
    return (
            <div className="contests-screen">
                <p>The ContestsScreen has rendered. And it contains:</p>
                <Header path={path}/>
                <ContestsButtons />
                <ContestsContainer allContests={allContests}/>
            </div>
        );
    }
}

export default connect(mapPropstoState)(ContestsScreen);