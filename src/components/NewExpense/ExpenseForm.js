import {useState} from 'react';
import React from 'react';
import './ExpenseForm.css'

const ExpenseForm=()=>{

    const [EnteredTitle,setEnteredTitle]=useState("");
    const [EnteredAmount,setEnteredAmount]=useState("");
    const [EnteredDate,setEnteredDate]=useState("");


    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">
            
                <div className='new-expense__control label'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
            
                <div className='new-expense__control label'>
                    <label>Amount</label>
                    <input type="number" min="1" step="1" onChange={amountChangeHandler}></input>
                </div>
                
                <div className='new-expense__control label'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler}></input>
                </div>
            
                <div className='new-expense__control label'>
                    <label>Location</label>
                    <input type="text"></input>
                </div>
            
        </div>
        <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm