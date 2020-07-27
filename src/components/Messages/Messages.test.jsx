import React from 'react';
import { shallow } from 'enzyme';
import Messages from './Messages';

describe('Messages component', () => {
  it('renders Messages', () => {
    const wrapper = shallow(<Messages />);
    expect(wrapper).toMatchSnapshot();
  });
});
