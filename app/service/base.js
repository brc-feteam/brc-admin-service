'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
const Service = require('egg').Service;
const Client = require('aliyun-api-gateway').Client;
const UUID = require('uuid');

class BaseService extends Service {

  async Gateway({
    url, apiVer, params, iotToken,
  }) {
    const { config } = this;
    // 用appKey和appSecret初始化客户端
    const client = new Client(config.aliyun.iot.AppKey, config.aliyun.iot.AppSecret);
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
