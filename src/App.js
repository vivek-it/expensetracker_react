
import './App.css';
import Expenseitem from './components/Expenseitem';
import Expense from './components/Expense'
import Newexpense from './components/Newexpense';
import { useState } from 'react';
const EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [aray,setarray]= useState(EXPENSES);
  const addtoaray=(data)=>{
    console.log("app")
    setarray((prevaray)=>{
      return [data,...prevaray]}
      );
      console.log(EXPENSES)
  };
 
  return (
  
    <div>
      <h2>Lets get stared</h2>
      <Newexpense add={addtoaray}/>
      <div className=''>
        
      <Expense item={aray}/>
      </div>
     
    </div>
   
    
    
  );
}

export default App;
