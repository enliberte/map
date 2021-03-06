import React, {Component} from 'react';
import {connect} from 'react-redux';
import osme from 'osme';
import {colors} from "../../../BLL/store/constants";
import {addNewPlacemarkWithAddress, setPlacemarks} from "../../../BLL/store/action_creators/placemarks";
import {openAuthPanel} from "../../../BLL/store/action_creators/authPanel";
import {setCurrentPlacemark} from "../../../BLL/store/action_creators/currentPlacemark";
import {openReadItemCard} from "../../../BLL/store/action_creators/readItemCard";
import {setPosition} from "../../../BLL/store/action_creators/map";


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
                center: this.props.coords,
                zoom: 7
            });

            this.Ymap.events.add('click',
                (event) => this.clickOnMap(event.get('coords'))
            );
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

    clickOnMap(coords) {
        this.props.onClickOnMap(this.props.auth.isAuthorized, coords);
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
        if (placemarks) {
            const placemarksObj = placemarks.map(placemark => new ymaps.Placemark(
                [placemark.latitude, placemark.longitude], {
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
                placemarkObj.events.add('click', (event) => this.props.onClickOnPlacemark(
                    placemarkObj.properties.get('id'), this.props.placemarks)
                );
            }
        }
    }

    updatePlacemarks(placemarks) {
        if (placemarks) {
            this.Ymap.geoObjects.each(
                placemarkObj => {
                    placemarks.forEach(
                        placemark => {
                            if (placemark.id === placemarkObj.properties.get('id')) {
                                placemarkObj.geometry.setCoordinates([placemark.latitude, placemark.longitude]);
                                placemarkObj.options.set('iconColor', colors[placemark.state]);
                            }
                        }
                    );
                }
            );
        }
    }

    removePlacemarks(placemarks) {
        if (placemarks) {
            let placemarksObjToRemove = [];
            this.Ymap.geoObjects.each(
                placemarkObj => {
                    if (placemarks.some(placemark => placemark.id === placemarkObj.properties.get('id'))) {
                        placemarksObjToRemove.push(placemarkObj);
                    }
                }
            );
            placemarksObjToRemove.forEach(
                placemarkObj => {
                    this.Ymap.geoObjects.remove(placemarkObj);
                }
            );
        }
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
                    placemark => !prevProps.placemarks.some(oldPlacemark => (
                        oldPlacemark.id === placemark.id
                    ))
                );
                const removedPlacemarks = prevProps.placemarks.filter(
                    oldPlacemark => !this.props.placemarks.some(newPlacemark => (
                        newPlacemark.id === oldPlacemark.id
                    ))
                );
                const updatedPlacemarks = this.props.placemarks.filter(
                    placemark => prevProps.placemarks.some(oldPlacemark => (
                        oldPlacemark.id === placemark.id && (oldPlacemark.latitude !== placemark.latitude || oldPlacemark.longitude !== placemark.longitude || oldPlacemark.state !== placemark.state)
                    ))
                );
                this.addPlacemarks(addedPlacemarks);
                this.updatePlacemarks(updatedPlacemarks);
                this.removePlacemarks(removedPlacemarks);
            }
            if (this.props.coords[0] !== prevProps.coords[0] && this.props.coords[1] !== prevProps.coords[1]) {
                this.Ymap.panTo(this.props.coords, {flying: true});
            }
        }
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        coords: [state.map.latitude, state.map.longitude],
        placemarks: state.placemarks.filter(placemark => state.filters[placemark.state]),
        newPlacemark: state.newPlacemark,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetPlacemarks() {
            dispatch(setPlacemarks());
        },
        onClickOnMap(isAuthorized, coords) {
            if (isAuthorized) {
                dispatch(addNewPlacemarkWithAddress(coords));
                dispatch(setPosition(coords[1], coords[0]));
            } else {
                dispatch(openAuthPanel());
            }
        },
        onClickOnPlacemark(id, placemarks) {
            const currentPlacemark = placemarks.filter(placemark => placemark.id === id)[0];
            dispatch(setCurrentPlacemark(id));
            dispatch(setPosition(currentPlacemark.latitude, currentPlacemark.longitude));
            dispatch(openReadItemCard());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(DumpMap);
