module.exports = {
  // other config options
  module: {
    rules: [
      // other rules
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
