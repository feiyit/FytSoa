export default {
	//运算符
	operator: [
		{
			label: "等于",
			value: "0",
		},
		{
			label: "不等于",
			value: "10",
		},
		{
			label: "大于",
			value: "2",
		},
		{
			label: "大于等于",
			value: "3",
		},
		{
			label: "小于",
			value: "4",
		},
		{
			label: "小于等于",
			value: "5",
		},
		{
			label: "包含",
			value: "1",
		},
		{
			label: "不包含",
			value: "13",
		},
	],
	//过滤结果运算符的分隔符
	separator: "|",
	//获取我的常用
	getMy: function (name) {
		return new Promise((resolve) => {
			console.log(`这里可以根据${name}参数请求接口`);
			var list = [];
			setTimeout(() => {
				resolve(list);
			}, 500);
		});
	},
	/**
	 * 常用保存处理 返回resolve后继续操作
	 * @name scFilterBar组件的props->filterName
	 * @obj 过滤项整理好的对象
	 */
	saveMy: function (name, obj) {
		return new Promise((resolve) => {
			console.log(name, obj);
			setTimeout(() => {
				resolve(true);
			}, 500);
		});
	},
	/**
	 * 常用删除处理 返回resolve后继续操作
	 * @name scFilterBar组件的props->filterName
	 */
	delMy: function (name) {
		return new Promise((resolve) => {
			console.log(name);
			setTimeout(() => {
				resolve(true);
			}, 500);
		});
	},
};
