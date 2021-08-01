class Currency < ApplicationRecord
	def calculate_value(amount)
		(current_price.to_f * amount.to_f).round(4)
	end

	def current_price
		# make request to third-party API to get crypto coin data
		url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
		res = HTTParty.get(url + '?slug=' + self.slug, headers: {
			'X-CMC_PRO_API_KEY' => 'b8be0f71-4ed9-4a61-812c-524a19211a76'
		})
		JSON.parse(res.body)['data']['1']['quote']['USD']['price']
		# ['data']['quote']['USD']['price']
	end
end
