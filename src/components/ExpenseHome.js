import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpenseSummary';
import ExpenseListFilter from './ExpenseListFilter';


const ExpenseHome = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseHome;