import React, {Component} from 'react';
import {connect} from 'react-redux';
import osme from 'osme';
import {colors} from "../../../BLL/store/constants";
import {addNewPlacemarkWithAddress, setPlacemarks} from "../../../BLL/store/action_creators/placemarks";
import {openCreateItemCard} from "../../../BLL/store/action_creators/createItemCard";


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
                center: [55.76, 37.64],
                zoom: 7
            });

            this.Ymap.events.add('click', (event) => this.props.onOpenCreateItemCard(event.get('coords')));

            const placemarks = this.props.placemarks.map(placemark => new ymaps.Placemark(
                [placemark.latitude, placemark.longitude],  {
                    hintContent: placemark.address,
                    balloonContent: placemark.state
                }, {
                    preset: 'islands#icon',
                    iconColor: colors[placemark.state]
                })
            );
            for (let placemark of placemarks) {
                this.Ymap.geoObjects.add(placemark)
            }

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

    componentDidUpdate(prevProps) {
        if (this.Ymap) {
            if (this.props.newPlacemark.isDisplayed) {
                if (this.props.newPlacemark.coords !== prevProps.newPlacemark.coords) {
                    if (this.newPlacemark) {
                        this.Ymap.geoObjects.remove(this.newPlacemark);
                    }
                    this.newPlacemark = new ymaps.GeoObject({
                        geometry: {
                            type: "Point",
                            coordinates: this.props.newPlacemark.coords
                        }
                    });
                    this.Ymap.geoObjects.add(this.newPlacemark);
                }
            } else {
                if (this.newPlacemark) {
                    this.Ymap.geoObjects.remove(this.newPlacemark);
                }
            }
            if (this.props.placemarks !== prevProps.placemarks) {
                const addedPlacemarks = this.props.placemarks.filter(
                    placemark => {
                        prevProps.placemarks.every(oldPlacemark => oldPlacemark.id !== placemark.id);
                    }
                );
                console.log(addedPlacemarks);
                const placemarks = addedPlacemarks.map(placemark => new ymaps.Placemark(
                    [placemark.latitude, placemark.longitude],  {
                        hintContent: placemark.address,
                        balloonContent: placemark.state
                    }, {
                        preset: 'islands#icon',
                        iconColor: colors[placemark.state]
                    })
                );
                for (let placemark of placemarks) {
                    this.Ymap.geoObjects.add(placemark)
                }
            }
        }
    }
}


const mapStatesToProps = (state) => {
    return {
        placemarks: state.placemarks,
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
