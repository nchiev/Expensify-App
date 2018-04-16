import moment from 'moment'
import { start } from 'repl';

export default (expenses, { text = '', sortBy, startDate, endDate } = {}) => {
    // Filtering section
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt, "MMDDYYYY");

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        // Add trim
        const textMatch = text.length === 0 ||  expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }) //Sorting section
        .sort((a, b) => {
        switch (sortBy) {
            case 'date':
                return a.createdAt < b.createdAt ? 1 : -1;
            case 'amount':
                return a.amount < b.amount ? 1 : -1;
        }       
    });
};