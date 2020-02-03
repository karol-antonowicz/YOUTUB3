import React from 'react';
import {shallow} from 'enzyme';
import {AppLayout} from '../AppLayout';

describe('AppLayout', ()=> {
    test('renders AppLayout with no props', ()=> {
        const wrapper = shallow(<AppLayout/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('renders AppLayout with 1 child el', ()=> {
        const wrapper = shallow(
            <AppLayout>
                <div>Child1</div>
            </AppLayout>
        );
        expect(wrapper).toMatchSnapshot();
    })
    test('renders AppLayout with children elements', ()=> {
        const wrapper = shallow(
            <AppLayout>
                <div>Child1</div>
                <div>
                    <div>
                        <h5>Blaalalaalbla
                            <span>chuj</span>
                            dupa
                        </h5>
                    </div>
                </div>
            </AppLayout>
        );
        expect(wrapper).toMatchSnapshot();
    })
})
