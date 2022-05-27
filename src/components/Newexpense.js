import "./NewExpense.css"
import ExpenseForm from "./Expenseform"
const Newexpense = (props)=>{
  const savedata=(data)=>{
    // console.log("new")
    // console.log(data)
    props.add(data)
  
  }
    return(
        <div className="new-expense">
          <ExpenseForm onSavedata={savedata}/>
        </div>

        
    )
}
export default Newexpense