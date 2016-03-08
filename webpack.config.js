var webpack = require('webpack');

var productionPlugin = new webpack.DefinePlugin({
'process.env': {NODE_ENV: '"production"'}
});

module.exports = {
  entry: "./app/src/js/index.js",
  output: {
    path: './app/dist',
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './app/dist',
  },
  plugins: [productionPlugin],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
