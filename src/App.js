// import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expense/Expenses';


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
      <h2>Lets get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
