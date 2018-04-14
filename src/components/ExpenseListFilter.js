import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters'

class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: undefined
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusInput = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused
            }
        });
    }

    handleExpenseTextFilterChange = (event) => {
        this.props.dispatch(setTextFilter(event.target.value));
    };

    handleExpenseTypeChange = (event) => {
        const expenseTypeFilter = event.target.value;

        switch (expenseTypeFilter){
            case 'date':
                this.props.dispatch(sortByDate());
                break;
            case 'amount':
                this.props.dispatch(sortByAmount());
                break;
        }
    };

    render() {
        return (
            <div>
                <input type="text" onChange={(e)=> {
                    this.handleExpenseTextFilterChange(e);
                }}
                value={this.props.filters.text}/>
                <select onChange={(e)=> {
                        this.handleExpenseTypeChange(e)
                    }}
                    value={this.props.filters.sortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                 startDate={this.props.filters.startDate}
                 endDate={this.props.filters.endDate}
                 onDatesChange={this.onDatesChange}
                 focusedInput={this.state.calendarFocused}
                 onFocusChange={this.onFocusInput} 
                 showClearDates={true}
                 numberOfMonths={1}
                 isOutsideRange={() => false}
                />
            </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilter);