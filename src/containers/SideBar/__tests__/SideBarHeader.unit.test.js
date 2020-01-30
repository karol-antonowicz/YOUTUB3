import React from 'react';
import {shallow} from 'enzyme';
import {SideBarHeader} from '../SideBarHeader';


describe('SideBarHeader', () =>{ 

test('renders SideBarHeader with props.title=null', ()=>{
    const wrapper = shallow(
        <SideBarHeader/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders SideBarHeader with props.title=\'\' ', ()=> {
    const wrapper = shallow (
        <SideBarHeader title=''/>
    )
    expect(wrapper).toMatchSnapshot();
})

test('renders SideBarHeader with props.title=\'dupa\' ', ()=> {
    const wrapper = shallow (
        <SideBarHeader title='dupa'/>
    )
    expect(wrapper).toMatchSnapshot();
})

})