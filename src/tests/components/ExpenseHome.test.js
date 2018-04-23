import React from 'react';
import { shallow } from 'enzyme';

import ExpenseHome from '../../components/ExpenseHome';

test('should render home component', () => {
    const wrapper = shallow(<ExpenseHome />);

    expect(wrapper).toMatchSnapshot();
});