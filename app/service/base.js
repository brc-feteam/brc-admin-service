'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
const Service = require('egg').Service;
const Client = require('aliyun-api-gateway').Client;
const UUID = require('uuid');
const debug = require('debug')('brc-service[BaseService]');

class BaseService extends Service {

  async Gateway({
    url, apiVer, params, iotToken,
  }) {
    const { config } = this;

    debug('Gateway Info = %s,%s', url, params);
    debug(`AppKey=${config.aliyun.iot.AppKey}, AppSecret=${config.aliyun.iot.AppSecret}`);
    const { prod } = params;
    // 用appKey和appSecret初始化客户端

    let token = {
      AppKey: config.aliyun.iot.AppKey,
      AppSecret: config.aliyun.iot.AppSecret,
    };
    if (prod) {
      token = {
        AppKey: config.aliyun.prod.iot.AppKey,
        AppSecret: config.aliyun.prod.iot.AppSecret,
      };
    }
    console.log(token);

    const client = new Client(token.AppKey, token.AppSecret);
    const result = await client.post(url, {
      data: {
        id: UUID.v1(), // 请求唯一标识，必填
        version: '1.0', // 协议版本，固定值1.0
        request: {
          iotToken, // iottoken，选填
          apiVer, // api版本，必填
        },
        params: params || {}, // 业务参数，必填
      },
      headers: {
        accept: 'application/json',
      },
      timeout: 3000,
    });
    return result;
  }
}

module.exports = BaseService;
