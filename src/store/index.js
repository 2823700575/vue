import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let ModuleA = {
	namespaced: true,
	state: {
		nav_erweima1:"http://0.js.al.okbuycdn.com/resources/images/v6/common/appqcode_2.png",
		nav_erweima2:"http://0.js.al.okbuycdn.com/resources/images/v6/common/weixinqcode.png",
		//商品详情
		productShow_data:"",
		productShow_sqldata:"",
		// 单件商品详情数据
		singledshow_dataid:"",
		singledshow_datalistname:"",
		count:1
	},
	mutations: {
		//首页：用户点击商品跳转详情页面的携带的参数
		productShow_datafunction(state,obj){
			state.productShow_data=obj.mybrand
		},
		//详情页： 获取用户点击商品的参数展示对应的数据
		productShow_sqldatafun(state,obj){
			state.productShow_sqldata=obj.dataarr
		},
		//单件详情页： 获取用户点击商品的参数展示对应的数据
		singledshow_datafun(state,obj){
			state.singledshow_dataid = obj.shoppingid;
			state.singledshow_datalistname = obj.listname;
		}
		
	},
	actions: {

	},

}
let ModuleB = {
	namespaced: true,
	state: {
		login:"登陆",
		register:"注册",
		outlogin:"退出",
		tel:""
	},
	mutations: {
		mye(state,e){
			state.login=e.tel
			state.register=state.outlogin
			state.tel=e.tel
		},
		myb(state){
			state.login="登陆"
			state.register="注册"
		},
		myc(state,obj){
			state.login=obj.n
			state.register=state.outlogin
		}
	},
	actions: {

	}
}
let ModuleC = {
	namespaced: true,
	state: {
		count: 0,
		price: 699,
		collect: [],
		cartGoods: [{
			title: "Crocs卡骆驰女式伊莎贝拉露跟鞋",
			price: 100,
			img: "http://0.image.al.okbuycdn.com/nbn/w150_150_detect/static/e49f586fec00fad6879bb141cd3badb3.jpg",
			logo: "满减",
			text: "满2件减200元,还差1件享受此活动.去凑单>",
			size: "W5",
			num: 1,
			discount: 8,
			check: true
		}, {
			title: "Crocs卡骆驰女式伊莎贝拉露跟鞋",
			price: 200,
			img: "http://0.image.al.okbuycdn.com/nbn/w150_150_detect/static/e49f586fec00fad6879bb141cd3badb3.jpg",
			logo: "满减",
			text: "满2件减200元,还差1件享受此活动.去凑单>",
			size: "W5",
			num: 1,
			discount: 4,
			check: true
		},{
			title: "Crocs卡骆驰女式伊莎贝拉露跟鞋",
			price: 150,
			img: "http://0.image.al.okbuycdn.com/nbn/w150_150_detect/static/e49f586fec00fad6879bb141cd3badb3.jpg",
			logo: "满减",
			text: "满2件减200元,还差1件享受此活动.去凑单>",
			size: "W5",
			num: 1,
			discount: 8,
			check: true
		}]
	},
	mutations: {
		collect(state, obj) {
			console.log(obj, 888)
			state.collect.push(obj);
			state.collect = state.collect
		},
		delect(state, obj) {
			state.cartGoods.splice(obj.position,1)
			state.cartGoods = state.cartGoods
			console.log(state.cartGoods, 899)
		},
		delectCheck(state, obj) {
			state.cartGoods = obj.arr
			console.log(state.cartGoods, 888)
		}
	},
	actions: {
		// increment (state,obj) {
		// 	let collectArr=state.collect.push(obj);
		// 	state.commit('increment',{newArr:collectArr})    
		// }
	},
	getters: {
		sum(state) {
			let sum = 0;
			sum = state.num * state.price;
			return sum
		}
	}

}

export default new Vuex.Store({
	modules: {
		vuexA: ModuleA,
		vuexB: ModuleB,
		vuexC: ModuleC
	}
})
