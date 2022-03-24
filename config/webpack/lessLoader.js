const getStyleRule = require('@rails/webpacker/package/utils/get_style_rule')
const { getThemeVariables } = require('antd/dist/theme')

module.exports = getStyleRule(/\.less$/i, false, [
	{
		loader: 'less-loader',
		options: {
			sourceMap: true,
			lessOptions: {
				modifyVars: {
					// Getting AntD theme
					...getThemeVariables({
						dark: true,
						compact: true,
					}),
					// Theme overrides - https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
					'primary-color': '#39c486',
				},
				javascriptEnabled: true,
			},
		},
	},
])
