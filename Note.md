### npx create-react-app

###### 这个步骤会自动安装一些依赖包  
<img src="src\imgs\create-react-app-dependencies.png" width=250 height=300 />  

并创建他们的配置文件和初始化部分配置，可根据项目情况增改  
<img src="src\imgs\auto-config-files.PNG" width=200 height=200 />

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




