/*
**  Require library in node_modules
*/

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/*
**  MODE PRODUCT
*/

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [

  ]
});
