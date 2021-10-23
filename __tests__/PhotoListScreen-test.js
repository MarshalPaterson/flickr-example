import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { useState } from 'react';
import { Store } from "../src/store";
import { Provider } from 'mobx-react';

Enzyme.configure({ adapter: new Adapter() })

import PhotoListScreen from '../src/screens/PhotoListScreen'

import { shallow, mount } from 'enzyme'

it('it works!', () => {
  const wrap = shallow(<Provider Store={{ Store }}><PhotoListScreen name='my-component' /></Provider>)

  expect(wrap).not.toBeNull();
  expect(wrap.photo).not.toBeNull();

})
