import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses'
import getExpenseTotal from '../selectors/expenses-total'

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount && expenseCount > 1 ? 'expenses' : 'expense'  ;
    const formattedTotal = numeral(expenseTotal/100).format('$0,0.00');
    expenseCount = expenseCount ? expenseCount : 0;
    
    return (
        <div>
            <p>{`Viewing ${expenseCount} ${expenseWord} totalling ${formattedTotal}`}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    const filteredExpense = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: filteredExpense.length,
        expenseTotal: getExpenseTotal(filteredExpense)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);