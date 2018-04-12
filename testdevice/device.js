'use strict';

const Bone = require('@bone/bone-device-sdk');
// 填入前一步创建设备时候得到的 productKey、deviceName、deviceSecret 三元组激活凭证
const device = Bone.createDevice({
  productKey: 'a19kxqwXWu7',
  deviceName: 's7zMqOjD2yA1GcqckXXv',
  deviceSecret: '07G44K9Xia01rqNmZh3lVx4UbgX2EKVz',
});
// 监听服务调用
device.serve('property/set', params => {
  console.log('Receieve property/set serivce call, params is:', params);
  // 上报属性
  device.postProps(params, () => {
    console.log('Post new props successfully:', JSON.stringify(params, null, 2));
  });
});
// 连接
device.connect(err => {
  if (err) {
    return console.log('connect error: ', err);
  }
  console.log('connect succesfully!');
});
