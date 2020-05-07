<template>
	<div class="aside">
		<Info></Info>
		<TabCom></TabCom>
	</div>
</template>

<script>
	export default {
		data:{
			TabC:"Info"
		},
		components: {
			TabCom: () => import("./TabCom.vue"),
			Info: () => import("./Info.vue")
		},
		data(){return {}},
		methods:{
			changeCom(e){
				console.log(e.target,33333)
				this.$store.dispatch('vuexC/changeCom',{table:e.target.innerHTML})
			}
		}
		
	}
</script>

<style scoped="scoped">
	
	.ucenter .leftnnav dt {
	    height: 32px;
	    line-height: 32px;
	    color: #333;
	    font-size: 16px;
	    font-weight: bold;
	    margin-bottom: 13px;
	}
</style>
