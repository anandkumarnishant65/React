import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Kard from "../UI/Kard";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props){
  const [filteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }
    return (
    <Kard className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map((expense) => 
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