# vue-ele

`vue create vue-ele`  
cube-ui [quick-start](https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start)  
`vue add cube-ui`  

? Use post-compile? `Yes`  
? Import type `Partly`  
? Custom theme? `Yes`  
? Use rem layout? `No`  
? Use vw layout? (y/N) `No`  

[stylus](https://stylus-lang.com/)  
cube-ui 會安裝 `stylus` `stylus-loader` `Reset CSS`
mixins vue-ele\node_modules\cube-ui\src\common\mixins

## debug

> @import "~common/stylus/mixin" failed

vue.config.js

`~` 代表當前目錄的根目錄
common等目錄起別名 `alias`

```js
const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  ...
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])
  },
}
```

Error: Failed to load config "@vue/standard" to extend from.

## api

vue.config.js

```js
  chainWebpack(config) {
    config.resolve.alias
      ...
      .set('api', resolve('src/api'))
```

src\api\index.js  
`const getSeller = get('api/seller')`


[How to disable eslint on vue-cli 3?](https://stackoverflow.com/questions/49121110/how-to-disable-eslint-on-vue-cli-3)

vue.config.js

```js
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}
```

chrome / devTools / [Network] / XHR
http://localhost:8080/api/seller/

vue.config.js

```js
const appData = require('./data.json')
const seller = appData.seller
module.exports = {
  ...
  devServer: {
    before(app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
    }
  },
```

vue-ele\data.json

```json
{
  "seller": {
    ...
```

prod.server.js  
`node ./prod.server.js`  
http://localhost:8900/api/seller

## Docs

cube-ui [create-api 模块](https://didi.github.io/cube-ui/#/zh-CN/docs/create-api)

## Reference

ustbhuangyi/[vue-sell](https://github.com/ustbhuangyi/vue-sell)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy

`$ yarn add gh-pages`  

[Command Line Utility](https://www.npmjs.com/package/gh-pages)

package.json

```js
"homepage": "https://jacobhsu.github.io/vue-ele/",
"scripts": {
  "deploy": "yarn build && gh-pages -d dist"
}
```

vue.config.js

```js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'vue-ele' : '/',
}
```
