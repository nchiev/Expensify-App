import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2]]);
});

test('should allow by all, sorted by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([
        expenses[2],
        expenses[1],
        expenses[0]
    ]);
});

test('should allow by all, sorted by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([
        expenses[2],
        expenses[1],
        expenses[0]
    ]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment('12/19/2017','MMDDYYYY'),
        endDate: undefined
    }

    const result = selectExpenses(expenses,filters);

    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ]);
});


test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment('12/19/2017','MMDDYYYY'),
    }

    const result = selectExpenses(expenses,filters);

    expect(result).toEqual([
        expenses[1],
        expenses[0]
    ]);
});