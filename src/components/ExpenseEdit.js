import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class ExpenseEdit extends React.Component {
    handleDeleteExpense = () => {
        this.props.dispatch(removeExpense({ id : this.props.expense.id }));
        this.props.history.push('/');
    };

    onSubmit = (expense) => {
        this.props.onSubmit( this.props.expense.id, expense );
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm 
                expense={ this.props.expense } 
                onSubmit={ this.onSubmit }/>
                <button onClick={ this.handleDeleteExpense }>Remove</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
};

const mapDisptachToProps = (dispatch) => {
    return {
        onSubmit: (expense) => dispatch(editExpense(expense))
    };
};

export default connect(mapStateToProps, mapDisptachToProps)(ExpenseEdit);