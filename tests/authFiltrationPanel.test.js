import renderer from 'react-test-renderer';
import React from "react";
import FiltrationPanel from '../client/src/UI/components/filtrationPanel/filtrationPanel';


test('component: FiltrationPanel', () => {
    const tree = renderer.create(<FiltrationPanel />).toJSON();
    expect(tree).toMatchSnapshot();
});