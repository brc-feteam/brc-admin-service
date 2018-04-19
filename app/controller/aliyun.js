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

  // 产品管理服务 - 查询产品属性
  // http://127.0.0.1:7001/aliyun/queryPropertyByProductKey?productKey=a19kxqwXWu7
  async queryPropertyByProductKey() {
    const { ctx, service } = this;
    const {
      productKey,
    } = ctx.request.query;
    const result = await service.aliyun.queryPropertyByProductKey(productKey);
    ctx.body = result;
  }

  // 设备查询服务 - 查询设备列表
  // http://127.0.0.1:7001/aliyun/queryDeviceByProductKey?productKey=a19kxqwXWu7&offset=1&pageSize=10
  async queryDeviceByProductKey() {
    const { ctx, service } = this;
    const {
      productKey,
      offset,
      pageSize,
    } = ctx.request.query;

    const result = await service.aliyun.queryDeviceByProductKey({
      productKey,
      offset: offset || 1,
      pageSize: pageSize || 10,
    });
    ctx.body = result;
  }

  /**
   * 物的管理服务 - 获取物的详情列表
   */
  async thingDetailListGet() {
    const { ctx, service } = this;
    const {
      productKey,
    } = ctx.request.query;
    const result = await service.aliyun.thingDetailListGet(productKey);
    ctx.body = result;
  }

  /**
   * 物的管理服务 - 获取物的指定属性快照数据
   * http://127.0.0.1:7001/aliyun/getThingProperty?productKey=a19kxqwXWu7&deviceName=s7zMqOjD2yA1GcqckXXv&propertyIdentifier=LightSwitch
   */
  async getThingProperty() {
    const { ctx, service } = this;

    const {
      productKey, deviceName, propertyIdentifier,
    } = ctx.request.query;

    const params = {
      productKey, deviceName, propertyIdentifier,
    };

    const result = await service.aliyun.getThingProperty(params);

    ctx.body = result;
  }

  /**
   * 物的管理服务
   * 设置物的属性
   * http://127.0.0.1:7002/aliyun/setThingProperties?productKey=a19kxqwXWu7&deviceName=s7zMqOjD2yA1GcqckXXv&LightSwitch=1
   */
  async setThingProperties() {
    const { ctx, service } = this;
    const {
      productKey,
      deviceName,
      LightSwitch,
    } = ctx.request.query;

    const params = { productKey, deviceName, properties: { LightSwitch: Number(LightSwitch) } };
    const result = await service.aliyun.setThingProperties(params);
    ctx.body = result;
  }

}

module.exports = AliyunController;
