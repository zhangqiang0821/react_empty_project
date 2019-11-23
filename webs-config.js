/**
 * 启动项目：npm start -- --project=项目名称
 * 打包项目：npm run build -- --project=项目名称
 */

/**
 * 配置信息
 */
var websConfig = {
	default: {
		name: 'default',
		title: '默认项目',
		port: 7000,
		description: '默认空项目，开发新项目的时候，可直接复制这个空项目'
	},
	project1: {
		name: 'project1',
		title: '项目一',
		port: 7002,
		description: '项目一 test'
	},
	project2: {
		name: 'project2',
		title: '项目二',
		port: 7004,
		description: '项目二'
	}
}

/**
 * 获取传递过来参与
 */
const get_argv = (name = '') => {
	var argv;
	var config;
	try {
		argv = JSON.parse(process.env.npm_config_argv).original;
	}
	catch (ex) {
		argv = process.argv;
		console.log("ERROR: Not NPM")
	}
	for (var i = 0; i < argv.length; i++) {
		if (argv[i].indexOf("--" + name + "=") === 0) {
			config = argv[i].substr(name.length + 3);
		}
	}
	console.log("配置信息：", config, argv)
	return config;
}

/**
 * 返回指定项目的配置信息
 */
var webConfig = websConfig[get_argv('project')] || websConfig['default']

module.exports = webConfig