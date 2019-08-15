import {API_KEY} from "../client/src/BLL/store/constants";
import {fetchAddress} from "../client/src/BLL/api/placemarksAPI";

const coords = [57.626578, 39.893858];
const coords2 = [58.626578, 40.893858];
const expectedName = 'Советская площадь';
const expectedDescription = 'Ярославль, Россия';

test('api: Positive fetchAddress', () => {
	fetchAddress(coords, API_KEY).then(response => {
		const {name, description} = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
		expect(name).toBe(expectedName);
		expect(description).toBe(expectedDescription);
	})
});

test('api: Negative fetchAddress', () => {
	fetchAddress(coords2, API_KEY).then(response => {
		const {name, description} = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
		expect(name).not.toBe(expectedName);
		expect(description).not.toBe(expectedDescription);
	})
});