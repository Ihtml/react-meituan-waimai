const path = require('path')
const srcRoot = path.resolve(__dirname, './src')
const devPath = path.resolve(__dirname, 'dev')
const pagePath = path.resolve(srcRoot, 'pages')

module.exports = {
  entry: {},
  output: {},
  // 加载器配置
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: srcRoot },
      { test: /\.(png|jpg|jpeg)$/, use: ['url-loader?limit=8192'], include: srcRoot },
    ]
  }
}