import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Kard from "../UI/Kard";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props){
  const [filteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear
  })

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length>0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
        />
    ))
  }

    return (
    <Kard className="expenses">
      <ExpensesFilter selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Kard>
    )
}
export default Expenses