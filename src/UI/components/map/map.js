import React, {Component} from 'react';
import {connect} from 'react-redux';


class DumpMap extends Component {
    render() {
        return (
            <div id="YandexMaps"></div>
        );
    }
}


const mapStatesToProps = (state) => {
    return {
        filters: state.filters,
        placemarks: state.placemarks
    }
};


export default connect(mapStatesToProps)(DumpMap);
