import React, {Component} from 'react';
import {connect} from 'react-redux';
import osme from 'osme';
import {colors, MAP_COORDINATES} from "../../../BLL/store/constants";
import {addNewPlacemarkWithAddress, setPlacemarks} from "../../../BLL/store/action_creators/placemarks";


class DumpMap extends Component {
    constructor(props) {
        super(props);
        this.Ymap = null;
        this.newPlacemark = null;
    }

    componentWillMount() {
        this.props.onSetPlacemarks();
    }

    componentDidMount() {
        ymaps.ready(() => {

            this.Ymap = new ymaps.Map("YandexMap", {
                center: MAP_COORDINATES,
                zoom: 7
            });

            this.Ymap.events.add('click', (event) => this.props.onOpenCreateItemCard(event.get('coords')));
            this.addPlacemarks(this.props.placemarks);


            // osme.geoJSON('RU-YAR', {lang: 'ru'}, (data) => {
            //     let collection = osme.toYandex(data, ymaps);
            //     collection.add(this.Ymap);
            //
            //     this.Ymap.setBounds(collection.collection.getBounds(), {duration: 300});
            //
            //     const strokeColors = [
            //         '#000',
            //         '#F0F',
            //         '#00F',
            //         '#0FF',
            //     ];
            //     let meta = data.metaData,
            //         maxLevel = meta.levels[1] + 1;
            //
            //     collection.setStyles((object, yobject) => {
            //         const level = object.properties.level;
            //         return ({
            //             zIndex: level,
            //             zIndexHover: level,
            //             strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
            //             strokeColor: strokeColors[maxLevel - level] || '#000',
            //             fillColor: '#FFE2',
            //         });
            //     });
            // });
        });
    }

    render() {
        return (
            <div id="YandexMap"></div>
        );
    }

    createPlacemark() {
        this.newPlacemark = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: this.props.newPlacemark.coords
            }
        });
        this.Ymap.geoObjects.add(this.newPlacemark);
    }

    addPlacemarks(placemarks) {
        const placemarksObj = placemarks.map(placemark => new ymaps.Placemark(
            [placemark.latitude, placemark.longitude],  {
                hintContent: placemark.address,
                balloonContent: placemark.state,
                id: placemark.id
            }, {
                preset: 'islands#icon',
                iconColor: colors[placemark.state]
            })
        );
        for (let placemarkObj of placemarksObj) {
            this.Ymap.geoObjects.add(placemarkObj);
            placemarkObj.events.add('click', (event) => {
                console.log(placemarkObj.properties.get('id'));
            });
        }
    }

    removePlacemarks(placemarks) {
        console.log(placemarks);
        this.Ymap.geoObjects.each(
            placemarkObj => {
                console.log(placemarkObj, placemarkObj.properties.get('id'));
                if (placemarks.some(placemark => placemark.id === placemarkObj.properties.get('id'))) {
                    this.Ymap.geoObjects.remove(placemarkObj);
                }
            }
        )
    }

    removeNewPlacemark() {
        if (this.newPlacemark) {
            this.Ymap.geoObjects.remove(this.newPlacemark);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.Ymap) {
            if (this.props.newPlacemark.isDisplayed) {
                if (this.props.newPlacemark.coords !== prevProps.newPlacemark.coords) {
                    this.removeNewPlacemark();
                    this.createPlacemark();
                }
            } else {
                this.removeNewPlacemark()
            }
            if (this.props.placemarks !== prevProps.placemarks) {
                const addedPlacemarks = this.props.placemarks.filter(
                    placemark => !prevProps.placemarks.some(oldPlacemark => oldPlacemark.id === placemark.id)
                );
                const removedPlacemarks = prevProps.placemarks.filter(
                    oldPlacemark => !this.props.placemarks.some(newPlacemark => newPlacemark.id === oldPlacemark.id)
                );
                this.addPlacemarks(addedPlacemarks);
                this.removePlacemarks(removedPlacemarks);
            }
        }
    }
}


const mapStatesToProps = (state) => {
    return {
        placemarks: state.placemarks.filter(placemark => state.filters[placemark.state]),
        newPlacemark: state.newPlacemark
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetPlacemarks() {
            dispatch(setPlacemarks());
        },
        onOpenCreateItemCard(coords) {
            dispatch(addNewPlacemarkWithAddress(coords));
        }
    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(DumpMap);
