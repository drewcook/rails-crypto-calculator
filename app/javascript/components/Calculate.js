import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Calculate = props => {
	const { currency, onSubmit } = props
	const [amount, setAmount] = useState(0)

	const handleSubmit = e => {
		e.preventDefault()
		onSubmit(amount).then(() => setAmount(0))
	}

	return (
		<div>
			<h2>
				How much {currency.name} ({currency.currency_symbol}) do you own?
			</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Search for a Currency:</label>
					<input
						type="number"
						placeholder="Ex: 4, 12.5, 200"
						onChange={e => setAmount(e.target.value)}
						name="amount"
						value={amount}
						className="field"
					/>
				</div>
				<div className="form-group">
					<button type="submit">Calculate My Total</button>
				</div>
			</form>
		</div>
	)
}

Calculate.propTypes = {
	currency: PropTypes.shape({}).isRequired,
}

export default Calculate
