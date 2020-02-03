import React from 'react';
import {shallow} from 'enzyme';
import {VideoGridHeader} from '../VideoGridHeader';

describe('VideoGridHeader', () => {
    test('renders component with no props', () => {
        const wrapper = shallow(<VideoGridHeader/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('render VideoGridHeader with title props empty string', ()=>{
        const wrapper = shallow(<VideoGridHeader title=''/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders VideoGridHeader with dupa title', ()=>{
        const wrapper = shallow(<VideoGridHeader title='duupa & dupa'/>);
        expect(wrapper).toMatchSnapshot();
    });
})