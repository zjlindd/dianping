/* eslint-disable require-yield */

let app = require('koa')();

let router = require('koa-router')();

// 首页 —— 广告（超值特惠）
let homeAdData = require('./home/ad.js');

router.get('/api/homead', function *(next) {

    this.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
let homeListData = require('./home/list.js');

router.get('/api/homelist/:city/:page', function *(next) {

    // 参数
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    this.body = homeListData
});

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
