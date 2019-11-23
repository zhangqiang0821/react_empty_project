# 说明

- 此目录是 所有react项目的主目录

# 添加新项目

1.直接复制src/web/下的default文件夹到src/web/目录下，然后将目录名称修改成对应的项目名称
2.在webs.config.js中websConfig中添加上新项目的配置信息。如：
var websConfig = {
	default: {
		name: 'default',
		title: '默认项目',
		port: 7000,
		description: '默认空项目，开发新项目的时候，可直接复制这个空项目'
	},
	project1: {
		name: 'project1', //项目名称 === 所在的目录（src/webs/项目目录）
		title: '新项目的HTML title',
		port: 7002, //端口
		description: '新项目的描述'
	}
}

# 启动项目 and 打包项目
# 启动项目 运行：npm start -- --project=项目名称
# 打包项目 运行：npm run build -- --project=项目名称
