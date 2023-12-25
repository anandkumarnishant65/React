import React, {useState} from 'react';

import './ExpenseItem.css';


function ExpenseDetails(props){

    const [title,setTitle]=useState(props.title);

    const clickHandler = ()=>{
        setTitle('Updated!!!');
        console.log(title)
    }

    const [amount,setAmount]=useState(props.amount);

    const clickHandle = ()=>{
        setAmount('100');
        console.log(amount)
    }

    return(
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">Rs{amount}</div>
            <div className="expense-item__location">{props.location}</div>
            <button onClick={clickHandler}>change Title</button>
            <button onClick={clickHandle}>change Amount</button>
        </div>
    )

}

export default ExpenseDetails