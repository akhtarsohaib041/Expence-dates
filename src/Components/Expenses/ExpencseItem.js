import React from 'react'
import './ExpencseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function ExpencseItem(props) {

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{ props.title }</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
  )
}
