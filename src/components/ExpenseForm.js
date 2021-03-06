import React from 'react';
import moment from 'moment';
import  { SingleDatePicker } from 'react-dates';

//CSS
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt):moment(),
            isCalendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState(() => {
            return {
                description: description
            };
        });
    };

    onNoteChange = (e) => {
        const note = e.target.value;

        this.setState(() => {
            return {
                note: note
            };
        });
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/))
        {
            this.setState(() => ({amount}));        
        }
    };

    onDateChange = (createdAt) => {
        this.setState(() => {
            return {
                createdAt: createdAt
            }
        });
    };

    onDateFocusChange = (e) => {
        this.setState(() => {
            return {
                isCalendarFocused: e.focused
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: 'Please provide description and amount'
                }
            });
        } else {
            this.setState(() => {
                return {
                    error: ''
                }
            });
            this.props.onSubmit({
                    description: this.state.description,
                    amount: parseFloat(this.state.amount, 10) * 100,
                    createdAt: this.state.createdAt.valueOf(),
                    note: this.state.note
            });
        }
    }

    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange} 
                    focused={this.state.isCalendarFocused} 
                    onFocusChange={this.onDateFocusChange} 
                    numberOfMonths={1}
                    className="select"
                    isOutsideRange={() => false} //Select any day
                    />
                    <textarea
                    placeholder="Add your notes (Optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    className="text-area"
                    >
                    </textarea>
                    <div>
                        <button className="button">
                            {this.props.expense ? "Edit" : "Add" } Expense 
                        </button>
                    </div>
                </form>
        )
    }
}