'use strict';

// config/config.local.js
// only read at development mode, will override default

exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};

exports.aliyun = {
  iot: {
    AppId: 'a120Z3dlEzIW8YwC',
    AppKey: '24841652',
    AppSecret: '66f7bb18cc60c2d31b441f57dd9f6067',
  },
};
