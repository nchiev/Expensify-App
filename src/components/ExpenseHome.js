import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseHome = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseHome;