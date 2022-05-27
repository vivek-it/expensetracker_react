import "./ExpenseItem.css"
import Expensedate from "./Expensedate";
import Card from "./UI/Card";
function Expenseitem(props) {
    return (

        <Card className="expense-item">
            <Expensedate date={props.date}/>
            <div className="expense-item__description"><h2>{props.title}</h2></div>
        <div className="expense-item__price">{props.price}</div> 
        </Card>
        

 

    )
}
export default Expenseitem;