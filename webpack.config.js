var path = require('path');

module.exports = {
  entry: {
    ReactIconTint: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: __dirname + "/dist",
    filename: "react-icon-tint.js",
    library: "ReactIconTint"
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
