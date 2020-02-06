import React from 'react';
import {shallow} from 'enzyme';
import {Comments} from '../Comments';

describe('Comments', ()=>{
    test('Comments renders with no props', () => {
        const wrapper = shallow(<Comments/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Comments renders with props amountComments', () => {
        const wrapper = shallow(<Comments amountComments={245454}/>);
            expect(wrapper).toMatchSnapshot();
    });
})