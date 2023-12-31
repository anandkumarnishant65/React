import {useState} from 'react';
import React from 'react';
import './ExpenseForm.css'

const ExpenseForm=(props)=>{

    const [enteredTitle,setEnteredTitle]=useState("");
    const [enteredAmount,setEnteredAmount]=useState("");
    const [enteredDate,setEnteredDate]=useState("");
    // const [userInput, setUserInput]=useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })


    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)

        // setUserInput({...userInput,enteredTitle: event.target.value,})
        
        // considering 2nd point react schedules the state updates(it does not perform instantly (callback fn)) 
        //if we deal with alot of state update at the same time we could get 
        //outdated or incorrect state snapshot

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value}
        // })

    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)

        //setUserInput({...userInput,enteredAmount: event.target.value,})

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)

        //setUserInput({...userInput,enteredDate: event.target.value,})

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredDate: event.target.value}
        // })
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            
                <div className='new-expense__control label'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
            
                <div className='new-expense__control label'>
                    <label>Amount</label>
                    <input type="number" min="1" step="1" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                
                <div className='new-expense__control label'>
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm