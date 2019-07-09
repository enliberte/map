import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';


class App extends Component {
    render() {
        return (
            <div>
                <DumpMap />
            </div>

        );
    }
}


export default App;