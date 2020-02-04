import React from 'react';
import {shallow} from 'enzyme';
import {NextUpVideo} from '../NextUpVideo';

describe('NextUpVideo', () => {
    test('renders NextUpVideo', () => {
        const wrapper = shallow(<NextUpVideo/>);
        expect(wrapper).toMatchSnapshot();
    });
});