import React from 'react';
import {shallow} from 'enzyme';
import {CommentsHeader} from '../CommentsHeader';

describe('CommentsHeader', ()=>{
    test('CommentsHeader renders with no props', () => {
        const wrapper = shallow(<CommentsHeader/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('CommentsHeader renders with props amountCommentsHeader', () => {
        const wrapper = shallow(<CommentsHeader amountCommentsHeader={245454}/>);
            expect(wrapper).toMatchSnapshot();
    });
})