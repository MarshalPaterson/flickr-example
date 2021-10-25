import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, { useState } from 'react';
import store, { Store } from "../src/store";
import { Provider } from 'mobx-react';

Enzyme.configure({ adapter: new Adapter() });

import PhotoListScreen from '../src/screens/PhotoListScreen';

import { shallow, mount } from 'enzyme';

describe('Test case for Screens, Provider and Store.', () => {

  it('Screen with provider is not null', () => {
    const wrap = shallow(<Provider Store={{ Store }}><PhotoListScreen name='photolistscreen' /></Provider>);
    expect(wrap).not.toBeNull();
  })

  it('Make sure store is not null', () => {
    expect(store).not.toBeNull();
  })

  it('Check items on the store', () => {
    expect(store).not.toBeNull();
    expect(store.total).not.toBeNull();
    expect(store.perPage).not.toBeNull();
    expect(store.perPage).toBe(15);

  })

  test('Set Total and check if set ok', async () => {
    store.setTotal(4);
    expect(store.total).toBe(4);
  });
});
