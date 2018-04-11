'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
/* eslint no-unused-vars:["warn"] */
const BaseService = require('./base');

const ALIYUN_IOT_APIURLPREFIX = 'http://api.link.aliyun.com';

class AliyunService extends BaseService {

  /**
   * account attributes
   * @param {*} options parameters
   * @return {Object} return value
   */
  async accountAtt(options = {}) {
    const params = {
      url: `${ALIYUN_IOT_APIURLPREFIX}/iotx/account/listAttr`,
      apiVer: '1.0.4',
      params: {
        request: 'value1',
      },
    };

    return this.Gateway(params);
    //   .then(res => console.log(res))
    //   .catch(res => console.log(res));

  }

  /**
   * helpers https://linkdevelop.aliyun.com/docCenter#/apiDetail/817/1928
   * @param {*} options parameters
   * @return {Object} return value
   */
  async productInfoListGet(options = {}) {
    const params = {
      url: `${ALIYUN_IOT_APIURLPREFIX}/thing/product/list/get`,
      apiVer: '1.0.0',
      params: {
        pageNo: options.pageNo || 1,
        pageSize: options.pageSize || 10,
        status: options.status || 0,
        nodeType: options.nodeType || 0,
      },
    };

    return this.Gateway(params);
  }

  async queryPropertyByProductKey(productKey) {
    const params = {
      url: `${ALIYUN_IOT_APIURLPREFIX}/thing/product/properties/get`,
      apiVer: '1.0.0',
      params: {
        productKey,
      },
    };
    return this.Gateway(params);
  }


}

module.exports = AliyunService;
