import React from 'react';
import {shallow} from 'enzyme';
import {VideoMetaData} from '../VideoMetaData'

describe('VideoMetaData', ()=> {
    test('renders VideoMetaData with no viewCount', ()=> {
        const wrapper = shallow(<VideoMetaData/>)
    });
    test('renders VideoMetaData with some viewCount', ()=> {
        const wrapper = shallow(<VideoMetaData viewCount={262626262626262626262}/>)
    });
})