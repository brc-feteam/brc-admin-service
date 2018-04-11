'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    // this.ctx.body = 'hi, egg';
    await this.ctx.render('news.tpl', dataList);
  }
}

module.exports = HomeController;
