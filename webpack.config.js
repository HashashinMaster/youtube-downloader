const path = require('path');
module.exports = {
    entry: {
        home : {
          import: './src/home.js',
        },
        download: {
          import: './src/download.js',
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