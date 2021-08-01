import axios from 'axios'
import React, { useState } from 'react'
import Calculate from './Calculate'
import Portfolio from './Portfolio'
import Search from './Search'

const PortfolioContainer = () => {
	const [portfolio, setPortfolio] = useState([])
	const [searchResults, setSearchResults] = useState([])
	const [activeCurrency, setActiveCurrency] = useState(null)

	const handleSearchSubmit = (e, search) => {
		e.preventDefault()
		const url = 'http://localhost:3000/search'
		axios
			.post(url, { search })
			.then(res => setSearchResults(res.data.currencies))
			.catch(err => console.error(err))
	}

	const handleResultClick = id => {
		const currency = searchResults.find(c => c.id === id)
		setSearchResults([])
		setActiveCurrency(currency)
	}

	const handleCalculateSubmit = amount => {
		const url = 'http://localhost:3000/calculate'
		return axios
			.post(url, {
				id: activeCurrency.id,
				amount,
			})
			.then(res => {
				setActiveCurrency(null)
				setPortfolio([...portfolio, res.data])
			})
			.catch(err => console.error(err))
	}

	return (
		<div>
			<h1>Cryptocurrency Portfolio Calculator</h1>
			<div className="grid">
				<div className="left">
					{!activeCurrency ? (
						<Search
							onChange={handleSearchSubmit}
							onSubmit={handleSearchSubmit}
							onResultClick={handleResultClick}
							searchResults={searchResults}
						/>
					) : (
						<Calculate currency={activeCurrency} onSubmit={handleCalculateSubmit} />
					)}
				</div>
				<div className="right">
					<Portfolio portfolioItems={portfolio} />
				</div>
			</div>
		</div>
	)
}

export default PortfolioContainer
