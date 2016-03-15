module.exports = {
  entry: './app/components/Main.js', /** this is your root component **/
  output: {
    filename: './public/bundle.js' /** your result css **/
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
