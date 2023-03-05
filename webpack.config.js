const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace with your output directory
    filename: 'bundle.js', // Replace with your output filename
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass'],
    alias: {
      'bootstrap-sass': 'bootstrap-sass/assets',
    },
  },
};