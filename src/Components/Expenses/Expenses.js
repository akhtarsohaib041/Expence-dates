import React from 'react'
import './Expenses.css'
import ExpencseItem from './ExpencseItem'
import Card from '../UI/Card'

export default function Expenses(props) {
  return (
    <Card className='expenses'>

      {
        props.item.map(
          (expense) => (
            <ExpencseItem date={expense.date} title={expense.title} amount={expense.amount}/>
          )
        )
      }

    </Card>
  )
}
