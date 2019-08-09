import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';
import {isAuthorizedSaga} from "../../BLL/store/action_creators/auth";
import Toolbar from "./toolbar/toolbar";
import AuthPanel from './authPanel/authPanel';
import RegPanel from './regPanel/regPanel';
import CreateItemCard from './createItemCard/createItemCard';
import ReadItemCard from './readItemCard/readItemCard';
import EditItemCard from './editItemCard/editItemCard';
import InWorkItemCard from "./inWorkItemCard/inWorkItemCard";
import DoneItemCard from "./doneItemCard/doneItemCard";
import FiltrationPanel from './filtrationPanel/filtrationPanel';
import {authPanelIsDisplayed} from "../../BLL/store/selectors/authSelectors";
import {regPanelIsDisplayed} from "../../BLL/store/selectors/regSelectors";
import {createItemCardIsDisplayed} from "../../BLL/store/selectors/createItemSelectors";
import {readItemCardIsDisplayed} from "../../BLL/store/selectors/readItemSelectors";
import {editItemCardIsDisplayed} from "../../BLL/store/selectors/editItemSelectors";
import {inWorkItemCardIsDisplayed} from "../../BLL/store/selectors/inWorkItemSelectors";
import {doneItemCardIsDisplayed} from "../../BLL/store/selectors/doneItemSelectors";
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
                {this.props.regPanelIsDisplayed && <RegPanel />}
                {this.props.createItemCardIsDisplayed && <CreateItemCard />}
                {this.props.readItemCardIsDisplayed && <ReadItemCard />}
                {this.props.editItemCardIsDisplayed && <EditItemCard />}
                {this.props.inWorkItemCardIsDisplayed && <InWorkItemCard />}
                {this.props.doneItemCardIsDisplayed && <DoneItemCard />}
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        authPanelIsDisplayed: authPanelIsDisplayed(state),
        regPanelIsDisplayed: regPanelIsDisplayed(state),
        createItemCardIsDisplayed: createItemCardIsDisplayed(state),
        readItemCardIsDisplayed: readItemCardIsDisplayed(state),
        editItemCardIsDisplayed: editItemCardIsDisplayed(state),
        inWorkItemCardIsDisplayed: inWorkItemCardIsDisplayed(state),
        doneItemCardIsDisplayed: doneItemCardIsDisplayed(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        isAuthorized() {
            dispatch(isAuthorizedSaga());
        }
    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(App);