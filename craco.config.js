const path = require('path');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new PurgeCSSPlugin({
          paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true }),
          safelist: {
            standard: [/^Projects/, /^Homepage/, /^Contact/, /^About/]
          }
        })
      ]
    }
  }
};
