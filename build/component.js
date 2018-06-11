require('shelljs/global')

const ora = require('ora')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const spinner = ora('building components for production...')

spinner.start()
baseWebpackConfig.entry = {}

const buildsConfig = {
  'dev': {
    filename: 'c-ui.js',
    library: 'c-ui',
    libraryTarget: 'umd',
    env: 'developement'
  },
  'prod': {
    filename: 'c-ui.min.js',
    library: 'c-ui',
    libraryTarget: 'umd',
    env: 'production'
  }
}

function getConfig (options) {
  const config = merge(baseWebpackConfig, {
    entry: {
      main: './src/index.js'
    },
    output: {
      filename: options.filename,
      library: options.library,
      libraryTarget: options.libraryTarget
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        progress: true,
        hide_modules: true
      }),
      new webpack.BannerPlugin({
        banner: `/*! C-UI v${require('../package.json').version} | (c) 2018 | MIT License */`,
        raw: true,
        entryOnly: true
      })
    ]
  })

  if (options.env === 'production') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    )
  }

  return config
}

Object.keys(buildsConfig).map(conf =>
  webpack(getConfig(buildsConfig[conf]), (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(`${stats.toString({
      color: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })}\n`)
  })
)
