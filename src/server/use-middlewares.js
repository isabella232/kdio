import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

let webpackConfig;

switch (process.env.NODE_ENV) {
  case 'development':
    webpackConfig = require('../../webpack/webpack.config.dev')
    break;
  case 'production':
    webpackConfig = require('../../webpack/webpack.config.prod')
    break;
}

const useMiddlewares = (app) => {

  const compiler = webpack(webpackConfig)

  app.use(bodyParser.json())

  if (process.env.NODE_ENV === 'development') {
    app.use(webpackDevMiddleware(compiler, {
      hot: true,
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      filename: webpackConfig.output.filename,
      historyApiFallback: true
    }))

    app.use(webpackHotMiddleware(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }))
  }

  app.use(cookieParser())
  app.use(helmet.frameguard({ action: 'sameorigin' }))
  app.use(helmet.xssFilter())
  app.use(helmet.ieNoOpen())
  app.use(helmet.hidePoweredBy())

  return app
}

export default useMiddlewares
