'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/aliyun.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  // //http://localhost:7001/aliyun/queryPropertyByProductKey?productKey=a1iYhDH6Efi
  it('should GET /aliyun/queryPropertyByProductKey', () => {
    return app.httpRequest()
      .get('/aliyun/queryPropertyByProductKey?productKey=a1iYhDH6Efi')
      .expect(data => {
        return data.code === 200;
      })
      .expect(200);
  });

  it('should GET /aliyun/getThingProperty', () => {

    const params = {
      productKey: 'a19kxqwXWu7',
      deviceName: 's7zMqOjD2yA1GcqckXXv',
      propertyIdentifier: 'LightSwitch',
    };
    // queryString.parse(params)

    return app.httpRequest()
      .get('/aliyun/getThingProperty')
      .expect(data => {
        // console.log(data);
        return data.code === 200;
      })
      .expect(200);
  });


});

