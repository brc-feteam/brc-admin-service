'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/aliyun.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  // //http://localhost:7001/aliyun/thing/product/properties/get?productKey=a1iYhDH6Efi
  it('should GET /aliyun/thing/product/properties/get', () => {
    return app.httpRequest()
      .get('/aliyun/thing/product/properties/get?productKey=a1iYhDH6Efi')
      .expect(data => {
        return data.code === 200;
      })
      .expect(200);
  });
});

