'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
const Controller = require('egg').Controller;

class AliyunController extends Controller {
  async index() {
    this.ctx.body = 'hi, aliyun';
  }

  async iotxAccountListAttr() {
    const { ctx, service } = this;
    const result = await service.aliyun.iotxAccountListAttr();
    ctx.body = result;
  }

  /**
   * page=2&pageSize=10
   * //status传字符串DEVELOPMENT_STATUS或者RELEASE_STATUS
   * //nodeType传字符串DEVICE或者GATEWAY
   */
  async productInfoListGet() {
    const { ctx, service } = this;
    const {
      page, pageSize, status, nodeType,
    } = ctx.request.query;
    console.log(page, pageSize, ctx.request.query, ctx.queries);
    const result = await service.aliyun.productInfoListGet({
      pageNo: page || 1,
      pageSize: pageSize || 10,
      status,
      nodeType,
    });
    ctx.body = result;
  }

  // /thing/product/properties/get
  async queryPropertyByProductKey() {
    const { ctx, service } = this;
    const {
      productKey,
    } = ctx.request.query;
    const result = await service.aliyun.queryPropertyByProductKey(productKey);
    ctx.body = result;
  }

  /**
   * 物的管理服务
   * 设置物的属性
   */
  async setThingProperties() {
    const { ctx, service } = this;
    const {
      productKey,
      deviceName,
      LightSwitch,
    } = ctx.request.query;

    // http://127.0.0.1:7002/aliyun/setThingProperties?productKey=a19kxqwXWu7&deviceName=s7zMqOjD2yA1GcqckXXv&LightSwitch=1

    const params = { productKey, deviceName, properties: { LightSwitch: Number(LightSwitch) } };
    const result = await service.aliyun.setThingProperties(params);
    ctx.body = result;
  }

}

module.exports = AliyunController;
