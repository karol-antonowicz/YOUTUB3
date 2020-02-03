import React from 'react';
import {shallow} from 'enzyme';
import {VideoGrid} from '../VideoGrid';

describe('VideoGrid', ()=> {
    test('renders VideoGrid without props', () => {
        const wrapper = shallow(<VideoGrid/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders with props title empty string', ()=> {
        const wrapper = shallow(<VideoGrid title=''/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('render VideoGrid with no title props and hideDivider', ()=> {
        const wrapper = shallow(<VideoGrid hideDivider={true}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders with title and hideDivider props set to true', () => {
        const wrapper = shallow(<VideoGrid title='Black & White' hideDivider={true}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders with title and hideDivider props set to false', () => {
        const wrapper = shallow(<VideoGrid title='Black & White' hideDivider={false}/>);
        expect(wrapper).toMatchSnapshot();
    });

})