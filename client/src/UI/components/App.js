import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';
import {withCookies} from 'react-cookie';
import {setPlacemarks} from "../../BLL/store/action_creators/placemarks";
import {isAuthorized} from "../../BLL/store/action_creators/auth";


class App extends Component {

    componentWillMount() {
        this.props.isAuthorized();
    }

    render() {
        return (
            <div>
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