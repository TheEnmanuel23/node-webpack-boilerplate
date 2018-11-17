const express = require('express')

const PORT = process.env.ENV_PORT || 3000
const app = express()

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackMiddleware = require('webpack-dev-middleware')
  const hotModuleReplacement = require('webpack-hot-middleware')
  const webpackConfig = require('./webpack.config')('development')

  // webpack hmr
  const compiler = webpack(webpackConfig)
  app.use(webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }))

  app.use(require("webpack-hot-middleware")(compiler));
}

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.listen(PORT, (err) => {
  if (err) return console.log(err)

  console.log(`Server is running on port ${PORT}`)
})
