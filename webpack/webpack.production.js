const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

module.exports = root => ({
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css|.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'main.css',
    }),
  ],
});
