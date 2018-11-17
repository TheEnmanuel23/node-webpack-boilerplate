const path = require('path');

module.exports = root => ({
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
});
