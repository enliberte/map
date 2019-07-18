import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';
import {isAuthorized} from "../../BLL/store/action_creators/auth";
import Toolbar from "./toolbar/toolbar";
import AuthPanel from './authPanel/authPanel';
import CreateItemCard from './createItemCard/createItemCard';
import FiltrationPanel from './filtrationPanel/filtrationPanel';
import './App.module.css';


class App extends Component {

    componentWillMount() {
        this.props.isAuthorized();
    }

    render() {
        return (
            <div>
                <Toolbar />
                <DumpMap />
                <FiltrationPanel />
                {this.props.authPanelIsDisplayed && <AuthPanel />}
                {this.props.createItemCardIsDisplayed && <CreateItemCard />}
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        authPanelIsDisplayed: state.authPanel.isDisplayed,
        createItemCardIsDisplayed: state.createItemCard.isDisplayed
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