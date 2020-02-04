import React from 'react';
import {shallow} from 'enzyme';
import {Video} from '../Video';

describe('Video', ()=> {
    test('renders Video component with some id', ()=> {
        const wrapper = shallow(<Video id='56sd65ds'/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('nothing rendered as no id from props given', ()=> {
        const wrapper = shallow(<Video/>);
        expect(wrapper).toMatchSnapshot();
    })
});