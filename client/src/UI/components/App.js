import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';
import {isAuthorized} from "../../BLL/store/action_creators/auth";
import Toolbar from "./toolbar/toolbar";
import AuthPanel from './authPanel/authPanel';


class App extends Component {

    componentWillMount() {
        this.props.isAuthorized();
    }

    render() {
        return (
            <div>
                <Toolbar />
                <DumpMap />
                {this.props.authPanelIsDisplayed && <AuthPanel />}
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        authPanelIsDisplayed: state.authPanel.isDisplayed
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        isAuthorized() {
            dispatch(isAuthorized());
        }
    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(App);