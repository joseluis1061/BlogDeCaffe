const path = require('path');

module.exports = {
  //mode: production,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  resolve: {
    extensions:['.js']
  },

  module:{
    rules:[
      //Babel
      {
        test: /\.m?js$/,
        exclude:/node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }
    ]
  }

}