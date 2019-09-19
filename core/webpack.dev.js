const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/*
**  MODE DEVELOPER
*/

module.exports = merge(common, {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    // host: '10.22.211.41',//your ip address
    port: 8080
  }
});
