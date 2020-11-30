const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
const path = require('path');

var client = {
  // Entry point where it starts the process
  entry: {
    index: './app/index.js',
  },
  // Defines the output path after webpack does its stuff
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  // This is necessary when entry is a node/express server
  // target: 'node',
  // externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env': {
      //   NODE_ENV: `'development'`
      // },
      __isBrowser__: "true"
    })
  ],
  optimization: {
    minimize: true
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.less']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            // options: {
            //   sourceMap: true,
            //   modules: true,
            // }
          },
          {
            loader: "less-loader"
          }
        ]
      }
      // {
      //   test: /\.(svg|ttf|woff|woff2|eot)$/,
      //   loader: 'url?limit=5000'
      // }
    ]
  }
};

module.exports = [ client ];