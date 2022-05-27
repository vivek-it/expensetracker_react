import Expenseitem from "./Expenseitem"
import Expensefilter from "./Expensefilter"
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css"
import Card from "./UI/Card"
import { useState } from "react"
const Expense=(props)=>{
    let print=<p>Not Found</p>
    const [filteryear,setfilteryear]=useState("2020")
    const f=(args)=>{
        setfilteryear(args);
      
    }
    const filterresult = props.item.filter((expense =>{
        return (expense.date.getFullYear().toString()===filteryear);
    }));
    if(filterresult.length>0){
        print=filterresult.map((expense)=>(
            <Expenseitem
            title={expense.title}
            price={expense.amount}
            date={expense.date}
            />
        ))
    }
return(
    <Card classname="expenses">
       
    <Expensefilter fun={f}/>
    <ExpensesChart expenses={filterresult} />

    {print}
    {props.item.map((expense)=>(<Expenseitem
        title={expense.title}
        price={expense.amount}
        date={expense.date}/>)
        )}
    
    </Card>
)
}
export default Expense