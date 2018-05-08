import React from 'react';

import Header from '../Components/Header';
import ContestsButtons from '../Components/ContestsButtons';
import ContestsContainer from '../Components/ContestsContainer';


let ContestsScreen = (props) => {
    if (props.match.path === '/new/contest') {
        return (
            <div className="contests-screen">
                <p>The ContestsScreen has rendered. And it contains:</p>
                <Header path={props.match.path}/>
                <ContestsButtons />
                <ContestsContainer />
                <p>The NewContest component has rendered in the foreground</p>
            </div>
        );
    } else if (props.match.path === '/new/submission') {
        return (
            <div className="contests-screen">
                <p>The ContestsScreen has rendered. And it contains:</p>
                <Header path={props.match.path}/>
                <ContestsButtons />
                <ContestsContainer />
                <p>The NewSubmission component has rendered in the foreground</p>
            </div>
        );
    } else {
        return (
            <div className="contests-screen">
                <p>The ContestsScreen has rendered. And it contains:</p>
                <Header path={props.match.path}/>
                <ContestsButtons />
                <ContestsContainer />
            </div>
        );
    }
}

export default ContestsScreen;