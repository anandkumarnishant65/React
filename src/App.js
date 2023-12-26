// import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses=[
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
  
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
