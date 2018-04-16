'use strict';
const debug = require('debug')('brc-service[BaseService]');
debug('node env vars: %s, %s', process.env.NODE_ENV, process.env.DEBUG);

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/aliyun', controller.aliyun.index);
  router.get('/aliyun/iotxAccountListAttr', controller.aliyun.iotxAccountListAttr);
  router.get('/aliyun/productInfoList', controller.aliyun.productInfoList);
  router.get('/aliyun/thing/product/properties/get', controller.aliyun.queryPropertyByProductKey);
  router.get('/aliyun/setThingProperties', controller.aliyun.setThingProperties);
};
