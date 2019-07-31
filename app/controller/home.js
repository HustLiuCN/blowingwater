const Controller = require('egg').Controller

class Home extends Controller {
	async index() {
		this.ctx.body = 'hello'
	}
}

module.exports = Home
