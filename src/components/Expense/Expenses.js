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
    return (
    <Kard className="expenses">
      <ExpensesFilter selected={filteredYear} 
      onChangeFilter={filterChangeHandler}/>

      {filteredExpenses.length === 0 ? 
      <p>No.expenses found</p>: 
      filteredExpenses.map((expense) => 
        <ExpenseItem
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
        />
      )}
      
    </Kard>
    )
}
export default Expenses