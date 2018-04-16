import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

// setTextFilter TEST BEGIN
test('should setup text filter object action object', () => {
    const filterTextTest = 'This test'
    const action = setTextFilter(filterTextTest);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: filterTextTest
    });
});

test('should setup text filter object action object with defualt values', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
// setTextFilter TEST END

// setStartDate TEST BEGIN
test('should generate set start date object', () => {
    const startDateTest = moment('01/01/2016', 'MM/DD/YYYY');
    const action = setStartDate(startDateTest);

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: startDateTest
    });
});
// setStartDate TEST END

// setEndDate TEST BEGIN
test('should generate set end date object', () => {
    const endDateTest = moment('01/01/2016', 'MM/DD/YYYY');
    const action = setEndDate(endDateTest);

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: endDateTest
    });
});
// setEndDate TEST END

// sortByAmount TEST BEGIN
test('should generate set sort by amount object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY',
        sortBy: 'amount'
    });
});
// sortByAmount TEST END

// sortByDate TEST BEGIN
test('should generate set sort by date object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY',
        sortBy: 'date'
    });
});
// sortByDate TEST END