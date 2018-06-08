const koa = require('koa');
const app = new koa();
const fs = require('fs');
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path');
// koa-router 返回的是函数
const router = require('koa-router')();
// koa2 不提供解析 request.body 的功能，需用外部模块 koa-bodyparser
const bodyParser = require('koa-bodyparser');
const Monk = require('monk');
const db = Monk('localhost:27017/messages');
const messages = db.get('messages');
// const messages = require('./model/model');

// body-parser 必须在 router 注册之前注册
app.use(bodyParser());
app.use(router.routes());

app.use(koaNunjucks({
	ext: 'html',
	path: path.join(__dirname, 'static/template'),
	nunjucksConfig: {
		trimBlocks: true
	}
}));

router.post('/add', async (ctx, next) => {
	console.log('****/add');
	let body = ctx.request.body;
	let author = body.Author;
	let m = body.Message;
	let t = {
		author: author,
		message: m,
	};
	console.log('t: ', t);
	// 插入数据
	messages.insert(t);
});

router.get('/all', async (ctx, next) => {
	// 获取所有数据
	let m = await messages.find({});
	console.log('所有数据: ', m);
	m = JSON.stringify(m);
	ctx.type = 'application/json';
	ctx.body = m;
});

app.listen('8090', '127.0.0.1');
console.log('http://127.0.0.1:8090');