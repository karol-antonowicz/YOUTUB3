import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

describe('App', ()=> {
    test('Renders', ()=> {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
    });
});