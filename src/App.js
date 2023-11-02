import React, {useState} from 'react'
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense';




let DUMMY_EXPENSE = [];

export default function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}/>
    </div>
  )
}