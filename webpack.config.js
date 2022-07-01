const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  //mode: production,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },

  resolve: {
    extensions:['.js']
  },

  module: {
    rules:[
      //Babel
      {
        test: /\.m?js$/,
        exclude:/node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },

      //CSS
      {
        test:/\.css$/i,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]

      },
      //Image
      {
        test:/\.[png]/,
        type: 'assets/resourse',
        generator: {
          filename: 'assets/img/[hash][ext][query]',
        }
      }
    ]
  },

  plugins: [
    //HTML
    new HtmlWebpackPlugin(
      {
        inject : true,
        template: './src/index.html',
        filename: './index.html', 
      }      
    ),
    new HtmlWebpackPlugin({
      filename: 'contacto.html',
      template: 'src/contacto.html',  
    }),
    new HtmlWebpackPlugin({
      filename: 'cursos.html',
      template: 'src/cursos.html',  
    }),
    new HtmlWebpackPlugin({
      filename: 'nosotros.html',
      template: 'src/nosotros.html',  
    }),
    //CSS
    new MiniCssExtractPlugin({
      filename:'./assets/css/[name].[contenthash].css'
    }), 
    //Clean files
    new CleanWebpackPlugin(),
    //Copia de archivos
    new CopyPlugin({
      patterns:[
        {
          from: path.resolve(__dirname, './src/assets/img'),
          to: 'assets/img'
        }
      ]
    })
    
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
}
}