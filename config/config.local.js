'use strict';

// config/config.local.js
// only read at development mode, will override default

exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};

exports.security = {
  xframe: {
    enable: false,
  },
  domainWhiteList: [ 'http://localhost:8000' ],
};

