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
