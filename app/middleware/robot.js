'use strict';

/* eslint no-unused-vars:["warn"] */
module.exports = (options, app) => {

  // options.ua  = config/config.default.js   robot.ua
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));

    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot';
    } else {
      await next();
    }
  };
};
