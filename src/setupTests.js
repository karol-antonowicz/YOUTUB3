import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // ENZYME CONFIGURE TO CURRENT REACT VERSION
import {createSerializer} from 'enzyme-to-json'; // NEEDED SO JEST UNDERSTANDS ENZYME

expect.addSnapshotSerializer(createSerializer({mode: 'deep'})); // in case encountering enzyme wrapper there is some additional serializer so it works anyway

// React 16 Enzyme adapter
Enzyme.configure({adapter: new Adapter()});