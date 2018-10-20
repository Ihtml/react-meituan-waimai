const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const srcRoot = path.resolve(__dirname, 'src')
const devPath = path.resolve(__dirname, 'dev')
const pageDir = path.resolve(srcRoot, 'pages')
const mainFile = 'index.js'

// html根据entry定制化
function getHtmlArray(entryMap) {
  let htmlArray = []
  Object.keys(entryMap).forEach((key) => {
    let fullPathName = path.resolve(pageDir, key)
    let fileName = path.resolve(fullPathName, key + '.html')

    if (fs.existsSync(fileName)) {
      htmlArray.push(new HtmlWebpackPlugin({
        filename: key + '.html',
        // 使用HTML模板
        template: fileName,
        // 生成的html引入哪个script文件
        chunks: [key]
      }))
    }
  })
  return htmlArray
}
// 寻找pages下的每个文件夹里的index.js作为入口文件
function getEntry() {
  let entryMap = {}
  fs.readdirSync(pageDir).forEach((pathname) => {
    let fullPathName = path.resolve(pageDir, pathname)
    // 判断fullPathName是文件还是路径
    let stat = fs.statSync(fullPathName)
    let fileName = path.resolve(fullPathName, mainFile)

    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[pathname] = fileName
    }
  })
  return entryMap
}

const entryMap = getEntry()
const htmlArray = getHtmlArray(entryMap)

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: devPath,
    hot: true
  },
  // 多入口
  entry: entryMap,
  output: {
    path: devPath,
    filename: '[name].min.js'
  },
  // 加载器配置
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: [{ loader: 'babel-loader' }], include: srcRoot },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: srcRoot },
      { test: /\.(png|jpg|jpeg)$/, use: ['url-loader?limit=8192'], include: srcRoot },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ].concat(htmlArray)
}