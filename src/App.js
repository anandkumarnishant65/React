import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';

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
      <h2>Lets get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location}>
      </ExpenseItem>
    </div>
  );
}

export default App;
