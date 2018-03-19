# ele-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


****************************************************************************
ngrok反向代理vue项目：

1、下载ngrok

2、解压下载文件，打开.exe文件，使用ngrok http 8080命令设置反向代理80端口（端口可以根据需要设置）

3、在浏览器中输入https://127.0.0.1:4040可以开启ngrok用户界面

4、使用npm run dev开启Vue服务器，注意要设置Vue中服务器的端口问8080（新版本的Vue-cli搭建的工程需要在webpack.dev.conf.js文件的devServer字段设置disableHostCheck: true才能允许代理访问80端口）

5、在手机中打开https://xxxxx.ngrok.io即可实现反向代理调试Vue项目