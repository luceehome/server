const commonLoaders = [
  {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
];

module.exports = [
  {
    name: 'server',
    entry: './src/server/server.js',
    target: 'node',
    output: {
      path: __dirname + '/build',
      filename: 'server.js'
    },
    module: {
      loaders: [
        {test: /\.json$/, loader: 'json-loader'}
      ].concat(commonLoaders)
    },
    externals: /^[a-z\-0-9]+$/,
    node: {
      __dirname: true,
      __filename: true
    }
  },
  {
    name: 'web-client',
    entry: './src/web-client/client.js',
    output: {
      path: __dirname + '/src/server/public/javascripts',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
      ].concat(commonLoaders)
    }
  }
];
