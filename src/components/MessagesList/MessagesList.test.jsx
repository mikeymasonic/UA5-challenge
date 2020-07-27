import React from 'react';
import { shallow } from 'enzyme';
import MessagesList from './MessagesList';

describe('MessagesList component', () => {
  it('renders MessagesList', () => {
    const wrapper = shallow(<MessagesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
