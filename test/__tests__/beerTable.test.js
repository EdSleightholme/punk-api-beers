import React from 'react';
import { shallow } from 'enzyme';
import BeerTable from '../../pages/BeerTable';


describe('Beer Table', () => {
  test('If Loading display loading status', () => {
    const shallowRender = shallow(<BeerTable loading />);
    expect(shallowRender.text()).toContain('loading....');
  });
  test('If passed empty array shows no data can be found', () => {
    const shallowRender = shallow(<BeerTable beers={[]} />);
    expect(shallowRender.text()).toContain('No Data To Display');
  });
});