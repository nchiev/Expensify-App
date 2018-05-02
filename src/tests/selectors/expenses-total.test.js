import getExpensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const total = getExpensesTotal([]);

    expect(total).toBe(0);
});

test('should return add up 1 expense array', () => {
    const expense = expenses[0];
    const total = getExpensesTotal([expense]);

    expect(total).toBe(195);
});

test('should add all expenses', () => {
    const total = getExpensesTotal(expenses);

    expect(total).toBe(123885);
});