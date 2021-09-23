const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    bundle: './src/index.tsx',
  },
  mode: 'development',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.join(__dirname, 'src'),
    },
  },
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /react/,
          name: 'react',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/img/*jpg',
          to: './assets/img/[name].jpg',
        },
      ],
    }),
  ],
  devServer: {
    hot: true,
    port: 3000,
  },
}
