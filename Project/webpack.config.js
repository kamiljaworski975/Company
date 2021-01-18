/* eslint-disable indent */
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const environment = require('./configuration/environment');

const pagesFiles = fs.readdirSync(
  path.resolve(__dirname, environment.paths.source, 'pages')
);

const templateFiles = pagesFiles.filter((el) => el.includes('.html'));

const htmlPluginEntries = templateFiles.map((template) => {
  const chunkName = template.replace('.html', '');
  return new HTMLWebpackPlugin({
    inject: 'body',
    hash: false,
    filename: `pages/${template}`,
    template: path.resolve(environment.paths.source, 'pages', template),
    chunks: [`${chunkName}`, 'app'],
  });
});

module.exports = {
  entry: {
    app: path.resolve(environment.paths.source, 'scripts', 'webp', 'app.js'),
    index: path.resolve(
      environment.paths.source,
      'scripts',
      'webp',
      'index.js'
    ),
    aboutus: path.resolve(
      environment.paths.source,
      'scripts',
      'webp',
      'aboutus.js'
    ),
    contact: path.resolve(
      environment.paths.source,
      'scripts',
      'webp',
      'contact.js'
    ),
    portfolio: path.resolve(
      environment.paths.source,
      'scripts',
      'webp',
      'portfolio.js'
    ),
    services: path.resolve(
      environment.paths.source,
      'scripts',
      'webp',
      'services.js'
    ),
  },
  output: {
    filename: 'js/[name].js',
    path: environment.paths.output,
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'postcss-loader',
          {
            loader: 'resolve-url-loader',
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/design/[name].[hash:6].[ext]',
              limit: environment.limits.images,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[hash:6].[ext]',
              publicPath: '../',
              limit: environment.limits.fonts,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    }),
    new ImageMinimizerPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(environment.paths.source, 'img'),
          to: path.resolve(environment.paths.output, 'img'),
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
      ],
    }),
    new HTMLWebpackPlugin({
      inject: 'body',
      hash: false,
      filename: 'index.html',
      template: path.resolve(environment.paths.source, 'index.html'),
      // eslint-disable-next-line no-unneeded-ternary
      chunks: ['index', 'app'],
    }),
  ].concat(htmlPluginEntries),
  target: 'web',
};