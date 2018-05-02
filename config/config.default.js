'use strict';

/* eslint no-multi-assign:["warn"]*/
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523410039876_1741';

  // add your config here
  config.middleware = [
    'robot',
  ];

  // egg-static
  config.static = {
    // maxAge: 31536000
  };

  // egg-view-nunjucks
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // 添加news 的配置项
  config.news = {
    pageSize: 5,
    serverUrl: 'http://rap2api.taobao.org/app/mock/9893/GET/news/catagory',
  };

  // middleware for robot
  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };

  config.aliyun = {
    iot: {
      AppId: 'a120Z3dlEzIW8YwC',
      AppKey: '24841829',
      AppSecret: '8f67772f7f4a18f7828dd61a2dab9e7e',
    },
    prod: {
      iot: {
        AppId: 'a120Z3dlEzIW8YwC',
        AppKey: '24841652',
        AppSecret: '66f7bb18cc60c2d31b441f57dd9f6067',
      },
    },
  };

  config.security = {
    csrf: {
      enable: false,
      domainWhiteList: [ '*', 'http://localhost:8000', 'http://192.168.24.141:8000' ],
    },
    csp: {
      enable: false,
    },
    xframe: {
      enable: false,
    },
    domainWhiteList: [ '*', 'http://localhost:8000', 'http://192.168.24.141:8000' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,POST,PUT,DELETE,OPTIONS',
  };

  return config;
};
