import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';
import {isAuthorized} from "../../BLL/store/action_creators/auth";
import Toolbar from "./toolbar/toolbar";


class App extends Component {

    componentWillMount() {
        this.props.isAuthorized();
    }

    render() {
        return (
            <div>
                <Toolbar />
                <DumpMap />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAuthorized() {
            dispatch(isAuthorized());
        }
    }
};


export default connect(null, mapDispatchToProps)(App);