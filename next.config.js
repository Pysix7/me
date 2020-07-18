/*  // This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

// Ref LINK : https://github.com/vercel/next.js/issues/9753

const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/me' : '';

module.exports = {
  generateBuildId: async () => 'current',
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    }
  },
  assetPrefix: repoNameURIPrefix,
  env: {
    LINK_PREFIX: repoNameURIPrefix,
  },
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
} */

/* eslint-disable */
const withLess = require('@zeit/next-less')
const path = require('path')
// const lessToJS = require('less-vars-to-js')
// const fs = require('fs')

// Where your antd-custom.less file lives
// const themeVariables = lessToJS(
// fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
// )

const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/me' : '';

module.exports = withLess({
  generateBuildId: async () => 'current',
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    }
  },
  assetPrefix: repoNameURIPrefix,
  env: {
    LINK_PREFIX: repoNameURIPrefix,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    // modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    const origConfigs = {
      ...config
    }
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      origConfigs.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      origConfigs.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
      // FROM - THERYCC config
      origConfigs.module.rules = config.module.rules.map(rule => {
        if (rule.loader === 'babel-loader') {
          rule.options.cacheDirectory = false
        }
        return rule
      })

      // For module resolution
      origConfigs.resolve.alias['~'] = path.join(path.resolve(__dirname), 'src');
    }
    return origConfigs;
  },
})

/* eslint-enable */