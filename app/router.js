'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/aliyun', controller.aliyun.index);
  router.get('/aliyun/accountatt', controller.aliyun.accountAtt);
  router.get('/aliyun/productInfoList', controller.aliyun.productInfoList);
  router.get('/aliyun/thing/product/properties/get', controller.aliyun.queryPropertyByProductKey);
};
