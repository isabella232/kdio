var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var findCacheDir = require('find-cache-dir');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');

var publicPath = '/';
var publicUrl = '';
var env = getClientEnvironment(publicUrl);

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    paths.srcIndex
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath: publicPath
  },
  resolve: {
    root: paths.appSrc,
    fallback: paths.nodePaths,
    modulesDirectories: ['packages', 'node_modules'],
    extensions: ['.coffee', '.cjsx', '.js', '.json', '.jsx', ''],
    alias: {
      'fs': 'browserfs/dist/shims/fs.js',
      // 'buffer': 'browserfs/dist/shims/buffer.js',
    //   'path': 'browserfs/dist/shims/path.js',
      'processGlobal': 'browserfs/dist/shims/process.js',
      'bufferGlobal': 'browserfs/dist/shims/bufferGlobal.js',
      'bfsGlobal': require.resolve('browserfs')
    },
  },
  module: {
    // keeping it here as a reminder to make it work with coffeelint. ~Umut
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'eslint',
      include: paths.appSrc,
    }],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loaders: [
          'babel?' + JSON.stringify({
            cacheDirectory: findCacheDir({ name: 'react-scripts' })
          }),
        ],
      },
      {
        test: /\.(coffee)$/,
        include: paths.appSrc,
        loaders: ['babel', 'coffee']
      },
      {
        test: /\.(cjsx)$/,
        include: paths.appSrc,
        loaders: ['babel', 'coffee', 'cjsx']
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
    ]
  },

  postcss: function() {
    return [
      autoprefixer({ browsers: [ '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9', ] }),
    ];
  },

  plugins: [
    new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal', process: 'processGlobal', Buffer: 'bufferGlobal' }),
    new InterpolateHtmlPlugin({ PUBLIC_URL: publicUrl }),
    new HtmlWebpackPlugin({ inject: true, template: paths.appHtml, }),
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  ],
  node: {
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    process: false,
    Buffer: false,
    fs: false,
  }
};
