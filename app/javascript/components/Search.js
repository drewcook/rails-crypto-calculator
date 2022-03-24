// import { SearchOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Search = props => {
	const { onChange, onSubmit, onResultClick, searchResults } = props
	const [searchTerm, setSearchTerm] = useState('')

	const handleChange = e => {
		const term = e.target.value
		setSearchTerm(term)
		onChange(e, term)
	}

	return (
		<div>
			<form onSubmit={e => onSubmit(e, searchTerm)} action="search" method="POST">
				<div className="form-group">
					<label>Search for a Currency:</label>
					<input
						type="text"
						placeholder="Ex: Bitcoin, Litecoin, Ethereum"
						onChange={handleChange}
						autoComplete="off"
						name="searchTerm"
						value={searchTerm}
						className="field"
					/>
				</div>
				{/* <Tooltip title="search"> */}
				<Button type="primary" shape="circle" />
				{/* </Tooltip> */}
				<button type="submit">Search</button>
				<hr />
				<div className="currency-list">
					{searchResults.length > 0 &&
						searchResults.map(result => (
							<div
								key={result.id}
								className="currency-list-item"
								onClick={() => onResultClick(result.id)}
							>
								<h4>
									{result.name} ({result.currency_symbol})
								</h4>
							</div>
						))}
				</div>
			</form>
		</div>
	)
}

Search.propTypes = {
	onChange: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onResultClick: PropTypes.func.isRequired,
	searchResults: PropTypes.arrayOf(PropTypes.shape({})),
}

Search.defaultProps = {
	searchResults: [],
}

export default Search
