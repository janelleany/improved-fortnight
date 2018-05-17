import React from 'react';
import { connect } from 'react-redux';

import { getAllFetch } from '../lib/api-calls';
import { loadAll } from '../lib/actions';

import Header from '../Components/Header';
import Buttons from '../Components/Buttons';
import AllContainer from '../Components/AllContainer';

let mapStateToProps = (state) => {
    return { all: state.pieces, alias: state.currentUser.alias, newPiece: state.newPiece }
}

let mapDispatchToProps = (dispatch) => {
    return { loadAll: all => dispatch(loadAll(all)) }
}


class AllScreen extends React.Component {

    componentDidMount() {
        getAllFetch()
        .then(response => {
                if (response.ok) {
                    return response.json()
                } else { throw new Error(`Status code: ${response.status}. Message: ${response.statusText}`) }
            })
            .then(all => {this.props.loadAll(all)})
            .catch(error => alert(error));
    }

    
    render() {
        let all = this.props.all;
        let alias = this.props.alias;
        return (
            <div className="all-screen">
                <Header alias={alias}/>
                <Buttons />
                <AllContainer all={all} />
            </div>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllScreen);