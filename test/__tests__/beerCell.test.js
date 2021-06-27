import React from 'react';
import { shallow } from 'enzyme';
import BeerCell from '../../pages/BeerCell';
import { testBeer } from '../testValues';



describe('BeerCell', () => {
  test('Displays beer data passed in to it ', () => {
    const shallowRender = shallow(<BeerCell beer={testBeer} />);
    expect(shallowRender.text()).toContain('testName');
    expect(shallowRender.text()).toContain('testTagline');
  });
});