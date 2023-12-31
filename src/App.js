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
  },
  {
    id:'e2',
    title:'Deodorant',
    amount:220,
    date:new Date(2022,11,24),
  },
  {
    id:'e3',
    title:'Radio',
    amount:600,
    date:new Date(2022,3,2),
  },
  {
    id:'e4',
    title:'T-shirt',
    amount:550,
    date:new Date(2022,7,28),
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
