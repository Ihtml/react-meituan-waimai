const path = require('path')
const fs = require('fs')
const srcRoot = path.resolve(__dirname, './src')
const devPath = path.resolve(__dirname, 'dev')
const pageDir = path.resolve(srcRoot, 'pages')
const mainFile = 'index.js'
// 寻找pages下的每个文件夹里的index.js作为入口文件
function getEntry() {
  let entryMap = {}
  fs.readdirSync(pageDir).forEach((pathname) => {
    let fullPathName = path.resolve(pageDir, pathname)
    let stat = fs.statSync(fullPathName)
    let fileName = path.resolve(fullPathName, mainFile)

    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[pathname] = fileName
    }
  })
  return entryMap
}

const entryMap = getEntry()
module.exports = {
  mode: 'development',
  entry: entryMap,
  output: {
    path: devPath,
    filename: '[name].min.js'
  },
  // 加载器配置
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: srcRoot },
      { test: /\.(png|jpg|jpeg)$/, use: ['url-loader?limit=8192'], include: srcRoot },
    ]
  }
}