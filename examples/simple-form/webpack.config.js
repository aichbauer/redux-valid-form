const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000,
  },
  entry: [
    'babel-polyfill',
    './src/app.js',
  ],
  output: {
    path: './dist',
    filename: 'js/app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
      },
    ]),
  ],
};
