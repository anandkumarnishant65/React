import Kard from '../UI/Kard';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


function ExpenseItem(props){
    
    return (
     <Kard className = "expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails amount={props.amount} title={props.title} location={props.location}/>    
    </Kard>
)}

export default ExpenseItem;