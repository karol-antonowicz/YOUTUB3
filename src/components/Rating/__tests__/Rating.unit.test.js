import React from 'react';
import {shallow} from 'enzyme';
import {Rating} from '../Rating'

describe('Rating', ()=> {
    test('renders Rating without props', ()=> {
        const wrapper = shallow(<Rating/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders Rating with likeCount', ()=> {
        const wrapper = shallow(<Rating likeCount={20}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders Rating with dislikeCount', ()=> {
        const wrapper = shallow(<Rating dislikeCount={20}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders Rating with likeCount and dislikeCount', ()=> {
        const wrapper = shallow(<Rating likeCount={1} dislikeCount={20}/>);
        expect(wrapper).toMatchSnapshot();
    });
})