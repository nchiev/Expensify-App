// Imports from modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Application imports 
// Css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Modules
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

// addExpense -> water bill
// gas
// set to bill filters'
// print visinble ones/

const store = configureStore();

// Add expenses
store.dispatch(addExpense({description: 'Water Bill', amount: 5000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 2500}));

// Filter expenses to bill only
//store.dispatch(setTextFilter('water'));

const bills = store.getState();

const visibleBills = getVisibleExpenses(bills.expenses, bills.filters);

console.log(store.getState());
console.log(visibleBills);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'));
