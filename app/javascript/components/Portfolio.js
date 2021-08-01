import PropTypes from 'prop-types'
import React from 'react'

const PortfolioItem = props => {
	const { item } = props

	return (
		<div key={item.id} className="portfolio-item row">
			<div className="col">
				<div className="header">Currency:</div>
				<div className="text">{item.currency.name}</div>
			</div>
			<div className="col">
				<div className="header">Current Price:</div>
				<div className="text">{item.current_price}</div>
			</div>
			<div className="col">
				<div className="header">Amount Owned:</div>
				<div className="text">{item.amount}</div>
			</div>
			<div className="col">
				<div className="header">Total Value:</div>
				<div className="text">{item.value}</div>
			</div>
		</div>
	)
}

const Portfolio = props => {
	const { portfolioItems } = props
	const total = portfolioItems.reduce((total, curr) => total + curr.value, 0)

	return (
		<div>
			<h2>My Portfolio</h2>
			<div className="portfolio-value">
				<h3>Total Portfolio Value: ${total}</h3>
			</div>
			<div className="portfolio-items">
				{portfolioItems.length > 0 &&
					portfolioItems.map(item => <PortfolioItem key={item.currency.id} item={item} />)}
			</div>
		</div>
	)
}

Portfolio.propTypes = {
	portfolioItems: PropTypes.arrayOf(PropTypes.shape({})),
}

Portfolio.defaultProps = {
	portfolioItems: [],
}

export default Portfolio
