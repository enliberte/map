import React, {Component} from 'react';
import {connect} from 'react-redux';


class DumpMap extends Component {
    componentDidMount() {
        ymaps.ready(this.init);
    }

    init() {
        this.Ymap = new ymaps.Map("YandexMap", {
            center: [55.76, 37.64],
            zoom: 7
        });
    }

    render() {
        return (
            <div id="YandexMap" style={{"width": "600px", "height": "400px"}}></div>
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
