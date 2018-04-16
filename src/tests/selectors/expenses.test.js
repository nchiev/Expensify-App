import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'Sandwiche',
    note: '',
    amount: 1295,
    createdAt: moment('12/19/2017','mmddyyyy')
},
{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 122395,
    createdAt: moment('1/19/2017','mmddyyyy')
}];

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses,filters);
    console.log(result);
    expect(result).toEqual([expenses[1],expenses[2]]);
});