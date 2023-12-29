// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES=[
  {
    id:'e1',
    title:'Tooth Paste',
    amount:55,
    date:new Date(2022,0,23),
    location: 'bhopal',
  },
  {
    id:'e2',
    title:'Deodorant',
    amount:220,
    date:new Date(2022,7,24),
    location: 'jaipur',
  },
  {
    id:'e3',
    title:'TV',
    amount:22000,
    date:new Date(2022,3,2),
    location: 'delhi',
  },
  {
    id:'e4',
    title:'T-shirt',
    amount:550,
    date:new Date(2022,7,28),
    location: 'lucknow',
  },
]

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
