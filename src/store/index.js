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
		// 加入购物数量
		count:0
		// 购物车测试
		// cartGoods:[{
		// 	title: "Crocs卡骆驰女式伊莎贝拉露跟鞋",
		// 	price: 100,
		// 	img: "http://0.image.al.okbuycdn.com/nbn/w150_150_detect/static/e49f586fec00fad6879bb141cd3badb3.jpg",
		// 	logo: "满减",
		// 	text: "满2件减200元,还差1件享受此活动.去凑单>",
		// 	size: "W5",
		// 	num: 1,
		// 	discount: 8,
		// 	check: true
		// }]
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
		},
		// 商品件数
		getsinglecount(state,obj){
			state.count = obj.singlecount;
		}
		// 购物测试
		// getcartGoodsfun(state,obj){
		// 	state.cartGoods[0].title = obj.title ;
		// 	state.cartGoods[0].price= obj.price;
		// 	state.cartGoods[0].img= obj.img;
		// 	state.cartGoods[0].logo= "满减";
		// 	state.cartGoods[0].text= obj.text;
		// 	state.cartGoods[0].size= obj.size;
		// 	state.cartGoods[0].num= obj.num;
		// 	state.cartGoods[0].discount= obj.discount;
		// 	state.cartGoods[0].check=obj.check ;
		// }
	},
	actions: {
		
	},
	getters: {
		
	}
	

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
		cartGoods: []
	},
	mutations: {
		getcartGoodsfun(state,obj){
			state.cartGoods[0].title = obj.title ;
			state.cartGoods[0].price= obj.price;
			state.cartGoods[0].img= obj.img;
			state.cartGoods[0].logo= "满减";
			state.cartGoods[0].text= obj.text;
			state.cartGoods[0].size= obj.size;
			state.cartGoods[0].num= obj.num;
			state.cartGoods[0].discount= obj.discount;
			state.cartGoods[0].check=obj.check ;
		},
		//收藏商品
		collect(state, obj) {
			console.log(obj, 888)
			state.collect.push(obj);
			state.collect = state.collect
		},
		//删除商品
		delect(state, obj) {
			state.cartGoods.splice(obj.position,1)
			state.cartGoods = state.cartGoods
			console.log(state.cartGoods, 899)
		},
		//改变check的值
		delectCheck(state, obj) {
			state.cartGoods = obj.arr
			console.log(state.cartGoods, 888)
		},
		//选择全部
		checkAll(state,obj) {
			state.cartGoods.forEach((item,index)=>{
				item.check=obj.check
				state.cartGoods[index].check=item.check;
			})
			state.cartGoods=state.cartGoods;
			console.log(state.cartGoods, 666)
		},
		// 从数据库中获取已经加入购物车的商品信息，存入仓库
		changeCart(state, obj) {
			console.log(obj.cartInfo, 77)
			obj.cartInfo.forEach(item=>{
				item.check=true
				item.logo= "满减"
			})
			state.cartGoods=obj.cartInfo;
			console.log(state.cartGoods, 666)
		},
	},
	actions: {
		
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
