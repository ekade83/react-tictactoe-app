import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { PiTrashSimpleDuotone } from 'react-icons/pi'

const ExpenseList = ({handleDelete, expenses, handleEdit, clearItems }) => {
	return (
		<>
			<ul className='list'>
				{expenses.map(expense => {
					return (
						<ExpenseItem 
							expense ={expense} 
							key={expense.id}
							handleDelete={handleDelete}
							handleEdit = {handleEdit}
						/>
					)
				})}
			</ul>
			{expenses.length > 0 && (
				<button 
					className='btn'
					onClick={clearItems}
				>
					목록지우기 <PiTrashSimpleDuotone className='btn-icon' />
				</button>
			)}
		</>
	)
}

export default ExpenseList