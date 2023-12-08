import React from 'react'
import './ExpenseForm.css'
import { PiPaperPlaneRightDuotone } from 'react-icons/pi'

const ExpenseForm =({handleCharge, charge, handleAmount, amount, handleSbmit, edit}) => {
	return (
		<form onSubmit={handleSbmit}>
			<div className='form-center'>
				<div className='form-group'>
					<label htmlFor="charge">지출항목</label>
					<input 
						type="text" 
						className='form-control' 
						id='charge' 
						name='charge'
						value={charge} 
						placeholder='예) 렌트비'
						onChange={handleCharge}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor="amount">비용</label>
					<input 
						type="number" 
						className='form-control' 
						id='amount' 
						name='amount' 
						value={amount} 
						placeholder='예) 100'
						onChange={handleAmount}
					/>

				</div>
			</div>
			<button type='submit' className='btn'>
				{ edit ? "수정" : "제출" }
				<PiPaperPlaneRightDuotone className='btn-icon'/> </button>
		</form>
	)

}

export default ExpenseForm

