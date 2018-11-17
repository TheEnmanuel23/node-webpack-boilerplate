const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = root => ({
  entry: path.join(root, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(root, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.join(root, 'src')],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
  ],
});
