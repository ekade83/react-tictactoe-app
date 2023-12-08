import React, { Component } from 'react'
import './ExpenseItem.css'
import { PiPencilSimpleDuotone, PiTrashSimpleDuotone } from "react-icons/pi";
const ExpenseItem = ({expense, handleDelete, handleEdit}) => {
	return (
		<li className='item'>
			<div className='info'>
				<span className='expense'>{expense.charge}</span>
				<span className='amount'> {expense.amount}원</span>
			</div>
			<div className=''>
				<button 
					className='edit-btn'
					onClick={() => handleEdit(expense.id)}
				>
					<PiPencilSimpleDuotone />
				</button>
				<button 
					className='clear-btn'
					onClick={() => 
						// console.log(`${this.props.expense.id} clicked`)
						handleDelete(expense.id)
					}
				>
					<PiTrashSimpleDuotone/>
				</button>
			</div>
		</li>
	)
}

export default ExpenseItem