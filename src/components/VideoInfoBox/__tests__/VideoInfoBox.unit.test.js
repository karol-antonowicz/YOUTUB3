import React from 'react';
import {shallow} from 'enzyme';
import {VideoInfoBox} from '../VideoInfoBox';

describe('VideoInfoBox', () => {
    test('VideoInfoBox renders collapsed', () => {
        const wrapper = shallow(<VideoInfoBox/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('VideoInfoBox renders expanded', () => {
        const wrapper = shallow(<VideoInfoBox/>);
        wrapper.find('.more').simulate('click');
        expect(wrapper).toMatchSnapshot();
    })
})