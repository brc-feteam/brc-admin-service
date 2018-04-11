'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
const Controller = require('egg').Controller;

class AliyunController extends Controller {
  async index() {
    this.ctx.body = 'hi, aliyun';
  }

  async accountAtt() {
    const { ctx, service } = this;
    const result = await service.aliyun.accountAtt();
    ctx.body = result;
  }

  /**
   * page=2&pageSize=10
   * //status传字符串DEVELOPMENT_STATUS或者RELEASE_STATUS
   * //nodeType传字符串DEVICE或者GATEWAY
   */
  async productInfoList() {
    const { ctx, service } = this;
    const {
      page, pageSize, status, nodeType,
    } = ctx.request.query;
    console.log(page, pageSize, ctx.request.query, ctx.queries);
    const result = await service.aliyun.productInfoListGet({
      pageNo: page || 1,
      pageSize: pageSize || 10,
      status: status || 'DEVELOPMENT_STATUS',
      nodeType: nodeType || 'DEVICE',
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
}

module.exports = AliyunController;
