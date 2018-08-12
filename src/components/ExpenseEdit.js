import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm'
import { startEditExpense, startDeleteExpense } from '../actions/expenses'

export class ExpenseEdit extends React.Component {
    handleDeleteExpense = () => {
        this.props.handleDeleteExpense({ id : this.props.expense.id });
        this.props.history.push('/');
    };

    onSubmit = (expense) => {
        console.log(this.props.expense);
        this.props.onSubmit( this.props.expense.id, expense );
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>                    
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense={ this.props.expense } 
                    onSubmit={ this.onSubmit }/>
                    <button className="button button--secondary" onClick={ this.handleDeleteExpense }>Remove Expense</button>
                </div>
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
        onSubmit: (id, expense) => dispatch(startEditExpense(id, expense)),
        handleDeleteExpense: (id) => dispatch(startDeleteExpense(id))
    };
};

export default connect(mapStateToProps, mapDisptachToProps)(ExpenseEdit);