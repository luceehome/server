module.exports = [
  {
    name: 'server',
    entry: './src/server/server.js',
    target: 'node',
    output: {
      path: __dirname + '/build/server',
      filename: 'index.js'
    },
    module: {
      loaders: [
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    },
    externals: /^[a-z\-0-9]+$/,
    node: {
      __dirname: true,
      __filename: true
    }
  }
];
