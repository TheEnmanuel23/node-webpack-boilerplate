const path = require('path');
const webpack = require('webpack')

module.exports = root => ({
  entry: {
    index: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      path.join(root, 'src/index.js')
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(root, 'public'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css|.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});
