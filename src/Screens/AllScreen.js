import React from 'react';
import { connect } from 'react-redux';

import { getAllFetch } from '../lib/api-calls';
import { loadAll } from '../lib/actions';

import Header from '../Components/Header';
import Buttons from '../Components/Buttons';
import AllContainer from '../Components/AllContainer';

let mapStateToProps = (state) => {
    return { all: state.queryList }
}

let mapDispatchToProps = (dispatch) => {
    return { loadAll: all => dispatch(loadAll(all)) }
}

class AllScreen extends React.Component {

    componentDidMount() {
        getAllFetch()
            .then(response => response.json())
            .then(all => {
                this.props.loadAll(all);
            });
        }
    
    render() {
        
        let all = this.props.all;
    
        return (
            <div className="all-screen">
                <p>The AllScreen has rendered. And it contains:</p>
                <Header />
                <Buttons />
                <AllContainer all={all} />
            </div>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllScreen);