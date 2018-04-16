import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123asd'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asd'
    });
});

test('should setup edit expense action object', () => {
    const updates = {
        price: 123,
        date: 111
    }
    const action = editExpense('123asd', updates);

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asd',
        updates: {
            price: 123,
            date: 111
        }
    });
});

test('should setup add expense action object', () => {
    const expense = {
        description: 'Add Test',
        note: 'This is a test',
        amount: 123,
        createdAt: 111
    }
    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Add Test',
            note: 'This is a test',
            amount: 123,
            createdAt: 111
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    });
});