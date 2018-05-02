'use strict';
const uuidv5 = require('uuid/v5');
const Client = require('aliyun-api-gateway').Client;
const debug = require('debug')('brc-controller[apigw]');
const Controller = require('egg').Controller;

class APIGWController extends Controller {

  * get() {
    const { ctx, service } = this,
      query = ctx.query || {};

    yield this.common(query, 'get');
  }

  * post() {
    const { ctx, service } = this,
      query = ctx.request.body || {};

    yield this.common(query, 'post');
  }

  * common(query, method) {
    const { ctx, service, config } = this;
    debug(`AppKey=${config.aliyun.iot.AppKey}, AppSecret=${config.aliyun.iot.AppSecret}`);
    debug(`${JSON.stringify(query)}`);

    try {
      const { url, apiVer, params } = query,
        client = new Client(config.aliyun.iot.AppKey, config.aliyun.iot.AppSecret);

      debug(params);

      const result = yield client[method](url, {
        data: {
          id: uuidv5(ctx.url, uuidv5.URL),
          version: '1.0',
          request: {
            apiVer,
          },
          params: params || {},
        },
      });

      ctx.body = result;

    } catch (e) {
      ctx.body = {
        code: e.code || 440,
        success: 'error',
        data: null,
        message: e.message,
        description: 'unknow',
      };
    }
  }
}

module.exports = APIGWController;
