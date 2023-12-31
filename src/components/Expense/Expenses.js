import ExpensesList from "./ExpensesList"
import './Expenses.css';
import Kard from "../UI/Kard";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
  const [filteredYear,setFilteredYear]=useState('2022')
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear
  })

  

    return (
    <Kard className="expenses">
      <ExpensesFilter selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Kard>
    )
}
export default Expenses