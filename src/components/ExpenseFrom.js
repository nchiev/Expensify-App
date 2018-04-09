import React from 'react';

export default class ExpenseForm extends React.Component {
    //Default state of form
    state = {
        description: '',
        note: '',
        amount: 0
    };

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
            this.setState(() => {
                return {
                    amount: amount
                };
            });        
        }
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                     type="text"
                     placeholder="Description"
                     autoFocus
                     value={this.state.description}
                     onChange={this.onDescriptionChange}
                    />
                    <input 
                     type="number"
                     placeholder="Amount"
                     value={this.state.amount}
                     onChange={this.onAmountChange}
                    />
                    <textarea
                     placeholder="Add your notes (Optional)"
                     value={this.state.note}
                     onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}