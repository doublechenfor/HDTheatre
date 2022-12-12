### npx create-react-app

###### 这个步骤会自动安装一些依赖包  
<img src="src\assets\imgs\create-react-app-dependencies.png" width=250 height=300 />  

并创建他们的配置文件和初始化部分配置，可根据项目情况增改  
<img src="src\assets\imgs\auto-config-files.PNG" width=200 height=200 />

### npx webpack(npm >= v5.2.0)
### webpack hmr replace
##### 项目选择NodeJS API方案 [官网文档](https://webpack.docschina.org/guides/hot-module-replacement/)
```
const webpack = require('webpack');
......
...
plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ......
]
```

由于react-script start的脚本start.js做了如下集成

```
......
compiler = webpack(config);
......
const devServer = new WebpackDevServer(serverConfig, compiler);
```
我们做了上述配置后，HMR就开启了，接下来执行```run npm start```就可以了

### 接下来我想自定义HOST和PORT，需要修改环境变量。由于react-script封装了一层webpack配置，我们需要看react-script的源码，避免某些配置不生效

 由于window和mac设置方式不同，我们使用`cross-env`依赖包方便跨多平台设置
 ```
 npm install --save-dev cross-env
 ```
在package.json中加上PORT和HOST的环境变量
```
"scripts": {
    "start": "cross-env PORT=8080 HOST=ginachen.demo.test react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
注意，用cross-env后，前后两个command不需要`&&`，因为它会把前后两个command隔开，导致环境变量设置无效  
上述操作完了后，`npm run start`后, 自动打开`http://ginachen.demo.test:8080`


#### ReactComponent, Antd, Router
v6版本相比v5有了不少的改变，后续有找到好的文档再贴过来

#### 接入stylus
首先需要为`webpack.config.js`中加入loader 
```
{
  test: /\.(js|jsx)$/i,
  loader: "babel-loader",
  exclude: ["/node_modules/"],
},
{
  test: /\.(ts|tsx|)$/i,
  use: ["babel-loader", "ts-loader"],
  exclude: ["/node_modules/"],
},
{
  test: /\.styl$/i,
  use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"],
},
```
这里需要注意的是不要同时使用`style-loader`和`mini-css-extract-plugin`功能会有重合，一起使用会报错，且后者不支持HMR，建议直接用`style-loader`

loader加完后，往`nav.styl`随便写上几句，run，无效。一开始还以为是路径不对，多次check后，排除该原因。决定还是从`react-scripts`着手，然后发现脚本封装的配置仅支持scss和sass，如下图 
<img src="src\assets\imgs\react-script-loader.PNG" width=400 height=110 /> 

再次check`start.js`后，也没发现读取了项目的`webpack.config.js`,不会吧！不会吧！只暴露了环境变量吗？找了一圈，果真没有，这也太不自由了，stylus是必然要用的。果断放弃``react-script`的封装包

#### 1 完善初始化`webpack.config.js`基础配置，loader弄好
#### 2 改改pkg运行脚本 
```
"start": "cross-env PORT=8080 HOST=ginachen.demo.test webpack-dev-server",
```
#### 3 `npm start` run起来，出现一些ts错误。改改`tsconfig.json`后，运行起来了，stylus也正常有效  

#### 接下来是静态资源加载
webpack4及其之前的版本，常规使用方法是通过url-loader和file-loader，
```
{
  test: /\.(png|jpg|gif)$/i,
  loader: 'url-loader',
  options: {
    limit: 6 * 1024,
  }
},
{
  test: /\.(png|jpg|gif)$/i,
  loader: 'file-loader',
},
```
在webpack5中做了更新，提供了Asset Modules，可直接使用静态资源，只要在`webpack.config.js`中加入下列基础配置即可，还有很多支持可看[官网文档](https://webpack.js.org/guides/asset-modules/#root)学习
```
{
  test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
  type: "asset",
  ......
}
```
要是习惯用url-loader和file-loader也可以继续使用

#### Http服务 - Axios和Mockjs接入

axios可直接使用，也可通过create创建实例
