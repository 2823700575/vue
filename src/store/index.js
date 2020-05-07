import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let ModuleA = {
	namespaced: true,
	state: {
		nav_erweima1:"http://0.js.al.okbuycdn.com/resources/images/v6/common/appqcode_2.png",
		nav_erweima2:"http://0.js.al.okbuycdn.com/resources/images/v6/common/weixinqcode.png",
		productShow_data:"",
		productShow_sqldata:""
	},
	mutations: {
		productShow_datafunction(state,obj){
			state.productShow_data=obj.mybrand
		},
		productShow_sqldatafun(state,obj){
			state.productShow_sqldata=obj.dataarr
		}
	},
	actions: {

	},

}
let ModuleB = {
	namespaced: true,
	state: {

	},
	mutations: {

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
