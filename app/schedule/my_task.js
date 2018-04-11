'use strict';

module.exports = {
  schedule: {
    interval: '1m', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    ctx.app.count = Date.now();
    // const res = await ctx.curl('http://rap2api.taobao.org/app/mock/9893/GET/news/catagory', {
    //   dataType: 'json',
    // });
    // ctx.app.cache = res.data;
  },
};
