import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class ExpenseAdd extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={ this.onSubmit }/>
            </div>
        );
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        onSubmit: (expense) => dispatch(startAddExpense(expense))
    };
};

export default connect(undefined, mapDisptachToProps)(ExpenseAdd);