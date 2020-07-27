/**
 * @description: next.js中css文件解析的配置方法
 * @Date Changed: 2020-07-24
 */

const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}

module.exports = withCss({})