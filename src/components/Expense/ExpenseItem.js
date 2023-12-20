import Card from '../UI/card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


function ExpenseItem(props){
    
    return (
     <Card className = "expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails amount={props.amount} title={props.title} location={props.location}/>    
    </Card>
)}

export default ExpenseItem;