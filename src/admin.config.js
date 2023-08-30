export default {
	login: {
		url: '/uni_modules/uni-id-pages/pages/login/login-withpwd' // 登录页面路径
	},
	index: {
		url: '/pages/index/index' // 登录后跳转的第一个页面
	},
	error: {
		url: '/pages/error/404' // 404 Not Found 错误页面路径
	},
	navBar: { // 顶部导航
		logo: '/static/logo.png', // 左侧 Logo
		langs: [{
			text: '中文简体',
			lang: 'zh-Hans'
		}, {
			text: '中文繁體',
			lang: 'zh-Hant'
		}, {
			text: 'English',
			lang: 'en'
		}],
		themes: [{
			text: '默认',
			value: 'default'
		}, {
			text: '绿柔',
			value: 'green'
		}],
		debug: {
			enable: process.env.NODE_ENV !== 'production', //是否显示错误信息
			engine: [{ // 搜索引擎配置（每条错误信息后，会自动生成搜索链接，点击后跳转至搜索引擎）
				name: '百度',
				url: 'https://www.baidu.com/baidu?wd=ERR_MSG'
			}, {
				name: '谷歌',
				url: 'https://www.google.com/search?q=ERR_MSG'
			}]
		}
	},
	sideBar: { // 左侧菜单
		// 配置静态菜单列表（放置在用户被授权的菜单列表下边）
		staticMenu: [
			//{},
			{
			menu_id: "demo",
			text: '静态功能演示',
			icon: 'admin-icons-kaifashili',
			url: "",
			children: [{
				menu_id: "icons",
				text: '图标',
				icon: 'admin-icons-icon',
				value: '/pages/demo/icons/icons',
			}, {
				menu_id: "table",
				text: '表格',
				icon: 'admin-icons-table',
				value: '/pages/demo/table/table',
			}]
		},
		 {
			menu_id: "echarts",
			text: 'echarts图表展示',
			icon: 'admin-icons-eco',
			url: "",
			children: [{
				menu_id: "admin-doc",
				icon: 'admin-icons-doc',
				text: '柱状图',
				value: '/pages/echarts/bar/barEchart'
			}, {
				menu_id: "stat-doc",
				icon: 'admin-icons-help',
				text: '基础折线图',
				value: '/pages/echarts/line/baseLineEchart'
			}, {
				menu_id: "admin-pulgin",
				icon: 'admin-icons-pulgin',
				text: '基础面积图',
				value: '/pages/echarts/line/basicArea'
			},
			{
				menu_id: "admin-pulgin",
				icon: 'uni-icons-shop',
				text: '南丁格尔玫瑰图',
				value: '/pages/echarts/pie/nightingaleChart'
			},
		]
		},
		{
			menu_id: "admim-doc-pulgin",
			text: 'SE组件展示',
			icon: 'admin-icons-tongji',
			url: "",
			children: [
				{
				menu_id: "admin-doc",
				icon: 'admin-icons-dashboard',
				text: 'app组件',
				value: '/pages/seUI/app/appSE'
			}, {
				menu_id: "stat-doc",
				icon: 'admin-icons-qudaofenxi',
				text: 'block组件',
				value: '/pages/seUI/block/blockSE'
			},  
			{
				menu_id: "admin-pulgin",
				icon: 'uni-icons-map',
				text: 'container组件',
				value: '/pages/seUI/container/containerSE'
			},
			{
				menu_id: "admin-pulgin",
				icon: 'uni-icons-star-filled',
				text: 'button组件',
				value: '/pages/seUI/button/buttonSE'
			},
			{
				menu_id: "admin-pulgin",
				icon: 'admin-icons-error-app',
				text: 'formField组件',
				value: '/pages/seUI/formField/formField'
			},
		
			{
				menu_id: "admin-pulgin",
				icon: 'admin-icons-help',
				text: '骨架屏组件',
				value: '/pages/seUI/skeleton/skeletonSE'
			},
			{
				menu_id: "admin-pulgin",
				icon: 'admin-icons-table',
				text: 'table及分页组件',
				value: '/pages/seUI/table/tableSE'
			},
			
			{
				menu_id: "admin-pulgin",
				icon: 'admin-icons-safety',
				text: 'stepper组件',
				value: '/pages/seUI/stepper/stepperSE'
			}

		]
		},
		{
			menu_id: "admim-doc-pulgin",
			text: '系统管理',
			icon: 'admin-icons-manager-permission',
			url: "",
			children: [
			/* 	{
				menu_id: "admin-doc",
				icon: 'admin-icons-doc',
				text: '用户管理',
				value: '/pages/system/user/list'
			}, {
				menu_id: "stat-doc",
				icon: 'admin-icons-help',
				text: '角色管理',
				value: '/pages/system/role/list'
			},  */
			{
				menu_id: "admin-pulgin",
				icon: 'admin-icons-cuowutongji',
				text: '权限管理',
				value: '/pages/system/permission/list'
			}]
		}
	]
	},
	uniStat: {
		
	}
}
