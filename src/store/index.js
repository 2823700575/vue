import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let ModuleA={
	namespaced: true,
	state:{
		
	},
	mutations:{
		
	},
	actions:{
		
	},
	
}
let ModuleB={
	namespaced: true,
	state:{
		
	},
	mutations:{
		
	},
	actions:{
		
	}
}
let ModuleC={
	namespaced: true,
	state:{
		
	},
	mutations:{
		
	},
	actions:{
		
	}
}

export default new Vuex.Store({
  modules: {
  	vuexA:ModuleA,
  	vuexB:ModuleB,
	vuexC:ModuleC
  }
})
