import React from 'react';
import { shallow } from 'enzyme';
import BeerDetails from '../../pages/BeerDetails';
import { testBeer } from '../testValues';


describe('Beer Table', () => {
  test('Displays Values Passed in to table', () => {
    const shallowRender = shallow(<BeerDetails beer={testBeer} />);
    expect(shallowRender.text()).toContain('testName');
    expect(shallowRender.text()).toContain('testABV');
    expect(shallowRender.text()).toContain('testDescription');
    expect(shallowRender.text()).toContain('foodPairingTest1');
    expect(shallowRender.text()).toContain('foodPairingTest2');
  });
});