module.exports = {
  entry: './app/App.js', /** this is your root component **/
  output: {
    filename: './public/bundle.js' /** your result css **/
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_compenents)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
