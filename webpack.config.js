const webpack = require('webpack');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnWarning: false,
              failOnError: false,
              fix: true
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/')
    ],
    extensions: [
      '.js',
      '.jsx',
      '.png', '.svg', '.jpg', '.gif'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'IMAGES': path.resolve(__dirname, 'assets/images/')
    }
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new StyleLintPlugin({
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: true
    })
  ]
};

module.exports = config;
