import React from 'react'
import './ExpenseForm.css'

const ExpenseForm=()=>{

    const titleChangeHandler=(event)=>{
        console.log(event.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
                <div className='new-expense__control label'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className='new-expense__control label'>
                <label>Amount</label>
                <input type="number" min="1" step="1"></input>
                </div>
                
            </div>
            <div className="new-expense__controls">
                <div className='new-expense__control label'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2024-12-31"></input>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className='new-expense__control label'>
                <label>Location</label>
                <input type="text"></input>
                </div>
            </div>
        </div>
        <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm