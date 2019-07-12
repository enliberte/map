import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';
import {withCookies} from 'react-cookie';


class App extends Component {
    render() {
        return (
            <div>
                <DumpMap />
            </div>
        );
    }
}


export default withCookies(App);