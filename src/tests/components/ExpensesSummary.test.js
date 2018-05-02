import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render no expenses', () => {
    const wrapper = shallow(<ExpenseSummary/>);

    expect(wrapper).toMatchSnapshot();
});

test('should render expense count with 12 and total $2.00', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={12} expenseTotal={200}/>);

    expect(wrapper).toMatchSnapshot();
});