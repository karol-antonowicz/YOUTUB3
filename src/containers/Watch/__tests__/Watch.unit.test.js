import React from 'react';
import {shallow} from 'enzyme';
import {Watch} from '../Watch';

describe('Watch testing', () => {
    test('Renders ok', ()=> {
        const wrapper = shallow(<Watch/>);
        expect(wrapper).toMatchSnapshot();
    });
});