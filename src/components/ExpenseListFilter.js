import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'


const ExpenseListFilter = (props) => {
    const handleExpenseTextFilterChange = (event, props) => {
        props.dispatch(setTextFilter(event.target.value));
    };

    const handleExpenseTypeChange = (event, props) => {
        const expenseTypeFilter = event.target.value;

        switch (expenseTypeFilter){
            case 'date':
                props.dispatch(sortByDate());
                break;
            case 'amount':
                props.dispatch(sortByAmount());
                break;
        }
    };

    return (
        <div>
            <input type="text" onChange={(e)=> {
                handleExpenseTextFilterChange(e, props);
            }}
            value={props.filters.text}/>
            <select onChange={(e)=> {
                    handleExpenseTypeChange(e, props)
                }}
                value={props.filters.sortBy}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    ); 
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilter);