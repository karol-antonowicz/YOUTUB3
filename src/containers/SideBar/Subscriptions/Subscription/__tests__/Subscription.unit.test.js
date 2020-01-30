import React from 'react';
import {shallow} from 'enzyme';
import {Subscription} from '../Subscription';

describe('Subscription', () => {

test('renders Subscription with props=null', ()=>{
    const wrapper = shallow(
        <Subscription/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders Subscription broadcasting, and no new videos', ()=>{
    const wrapper = shallow(
        <Subscription broadcasting label='sample'/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders Subscription broadcasting, and some new videos', ()=>{
    const wrapper = shallow(
        <Subscription broadcasting amountNewVideo={69} label='sample'/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders Subscription not broadcasting, and some new videos', ()=>{
    const wrapper = shallow(
        <Subscription amountNewVideo={69} label='sampledupa'/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders Subscription broadcasting, and no label no new videos', ()=>{
    const wrapper = shallow(
        <Subscription broadcasting/>
    );
    expect(wrapper).toMatchSnapshot();
});

})