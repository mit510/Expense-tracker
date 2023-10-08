import React from 'react'
import "./add-expense.css"
import Topfold from '../../components/topfold'
import AddForm from '../../components/add-form'

const AddExpense = () => {
  return (
    <div className='add-expense'>
        <Topfold/>
        <AddForm/>
    </div>
  )
}

export default AddExpense