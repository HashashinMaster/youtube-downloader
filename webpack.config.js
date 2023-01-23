const path = require('path');
module.exports = {
    externals: ['fs','path'],
  module: {
    rules: [
    {
      test: /\.html$/,
      use: ['raw-loader']
    }
  ]},
    entry: {
        home : {
          import: './src/home.js',
        },
        download: {
          import: './src/download.js',
        },
        navigate: {
          import: './src/navigate.js',
        },
      
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname,'public',"dist")
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        }
      },
    mode: 'development',
    watch:true
}