const path = require('path');

module.exports = [
  {
    name: 'server',
    entry: './src/server/server.js',
    target: 'node',
    output: {
      path: __dirname + '/build/server',
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: [
        {test: /\.json$/, loader: 'json-loader'}
      ]
    },
    externals: /^[a-z\-0-9]+$/,
    node: {
      __dirname: true,
      __filename: true
    }
  }
];
