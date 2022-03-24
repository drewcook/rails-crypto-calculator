const { environment } = require('@rails/webpacker')
const lessLoader = require('./lessLoader')

// Adds less support and AntDesign theme
environment.loaders.append('style', lessLoader)

module.exports = environment
