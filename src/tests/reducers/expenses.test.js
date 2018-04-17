import moment from 'moment';

import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual([]);
});

test('should add expense to default state', () => {
    const state = expensesReducer(undefined, {
        type: 'ADD_EXPENSE',
        expense: {
            id: '123',
            description: 'Add Test',
            note: 'This is a test',
            amount: 123,
            createdAt: 111
        }
    });

    expect(state).toEqual([
        {
            id: '123',
            description: 'Add Test',
            note: 'This is a test',
            amount: 123,
            createdAt: 111
        }
    ]);
});

test('should add expense to existing state', () => {
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense: {
            id: '123',
            description: 'Add Test',
            note: 'This is a test',
            amount: 123,
            createdAt: 111
        }
    });

    expect(state).toEqual([
        ...expenses,
        {
            id: '123',
            description: 'Add Test',
            note: 'This is a test',
            amount: 123,
            createdAt: 111
        }
    ]);
});

test('should remove expense from existing state', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    });

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should NOT remove expense from existing state, id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '222'
    });

    expect(state).toEqual([
        ...expenses
    ]);
});


test('should edit expense from existing state', () => {

    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {note: 'Updated!!!'}
    });

    expect(state).toEqual([
        expenses[0],
        expenses[1],
        {
            id: '3',
            description: 'Credit Card',
            note: 'Updated!!!',
            amount: 122395,
            createdAt: moment('1/19/2018','MMDDYYYY')
        }
    ]);
});

test('should NOT exist expense from existing state, id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: '22323',
        updates: {note: 'Updated!!!'}
    });

    expect(state).toEqual([
        ...expenses
    ]);
});