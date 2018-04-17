'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
/* eslint no-unused-vars:["warn"] */
const BaseService = require('./base');

const ALIYUN_IOT_APIURLPREFIX = 'https://api.link.aliyun.com';

class AliyunService extends BaseService {

  /**
   * account attributes
   * @param {*} options parameters
   * @return {Object} return value
   * https://linkdevelop.aliyun.com/docCenter#/apiDetail/5/1549
   */
  async iotxAccountListAttr(options = {}) {
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
   * status传字符串DEVELOPMENT_STATUS或者RELEASE_STATUS
   * nodeType传字符串DEVICE或者GATEWAY
   */
  async productInfoListGet(options = {}) {
    const params = {
      url: `${ALIYUN_IOT_APIURLPREFIX}/thing/product/list/get`,
      apiVer: '1.0.0',
      params: {
        prod: true, // fix: aliyun need prod key to access this API
        pageNo: options.pageNo || 1,
        pageSize: options.pageSize || 10,
        status: options.status || 'DEVELOPMENT_STATUS',
        nodeType: options.nodeType || 'DEVICE',
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

  async setThingProperties(opts) {
    const { productKey, deviceName, properties = { LightSwitch: 1 } } = opts;
    const params = {
      url: `${ALIYUN_IOT_APIURLPREFIX}/thing/device/properties/set`,
      apiVer: '1.1.0',
      params: {
        productKey,
        deviceName,
        properties,
      },
    };
    return this.Gateway(params);
  }

  /**
   * 物的管理服务获取物的详情列表
   * @param {*} opts dd
   * @return {Object} dd
   * https://linkdevelop.aliyun.com/docCenter#/apiDetail/4/2248
   */
  async thingDetailListGet(opts) {

    const params = {
      url: `${ALIYUN_IOT_APIURLPREFIX}/thing/device/detail/list/get`,
      apiVer: '1.1.0',
      params: {
        productKey: 'a19kxqwXWu7',
        onlineStatus: null, // [null, 0, 1]
        activeStatus: null, // [null, 0, 1]
        currentPage: 1,
        pageSize: 10,
      },
    };

    return this.Gateway(params);
  }

  // https://linkdevelop.aliyun.com/docCenter#/apiDetail/4/2238
  async getThingProperty(opts) {
    const {
      productKey,
      deviceName,
      propertyIdentifier,
    } = opts;

    const params = {
      url: `${ALIYUN_IOT_APIURLPREFIX}/thing/device/property/query`,
      apiVer: '1.1.0',
      params: {
        productKey, deviceName, propertyIdentifier,
      },
    };

    return this.Gateway(params);
  }


}

module.exports = AliyunService;
