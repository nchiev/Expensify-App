import moment from 'moment';
import filtersReducers from '../../reducers/filters'
import expenses from '../fixtures/expenses'

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducers(undefined, { type: 'SET_SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const setUpState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducers(setUpState, { type: 'SET_SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducers(undefined, { type: 'SET_TEXT_FILTER', text: 'hello' });
    expect(state.text).toBe('hello');
});

test('should set startDate filter', () => {
    const setUpStartDate = moment('12/18/1987', 'MMDDYYYY');
    const state = filtersReducers(undefined, { type: 'SET_START_DATE', startDate: setUpStartDate });
    expect(state.startDate).toBe(setUpStartDate);
});

test('should set endDate filter', () => {
    const setUpEndDate = moment('12/18/1987', 'MMDDYYYY');
    const state = filtersReducers(undefined, { type: 'SET_END_DATE', endDate: setUpEndDate });
    expect(state.endDate).toBe(setUpEndDate);
});