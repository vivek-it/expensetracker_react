import React,{useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm=(props)=>{
    const[data,setdata]=useState({
        id:"",
        title:"",
        amount:"",
        date:"",
    });
    const [title,settitle]=useState("")
    const [amount,setamount]=useState("")
    const [date,setdate]=useState("")
    // const[title,settitle]=useState("")
    const titlechanged=(event)=>{
        settitle(event.target.value);
        
    }
    // const[amount,setamount]=useState("")
    const amountchanged=(event)=>{
        setamount(
            event.target.value);
    }
    // const[date,setdate]=useState("")
    const datechanged=(event)=>{
    //    const d = event.target.value
    //    const year = d.split("-")[0]
    //    const month = d.split("-")[1].split("-")[0]
    //    const day = d.split("-")[1].split("-")[1]
    //    console.log(day)
        setdate(
            
        

            event.target.value
        );
        
    }
   
    const submithandler=(event)=>{
        event.preventDefault();
        const d = {

            title:title,
            amount:amount,
            date:new Date(date),
        }
        console.log(d);
        props.onSavedata(d);
        settitle(" ")
        setamount(" ")
        setdate(" ");
        

       
    }
    
    return(
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                <input type="text" placeholder="Enter the expensetitle" value={title} onChange={titlechanged}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                <input type="number" placeholder="Enter the expensetitle" value={amount} onChange={amountchanged}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                <input type="date" placeholder="Enter the expensetitle" value={date} onChange={datechanged}></input>
                </div>
                <div className="new-expense__action">
                <button type="submit">Add Expense</button>
                </div>

            
            
            </div>

        </form>
    )
}
export default ExpenseForm