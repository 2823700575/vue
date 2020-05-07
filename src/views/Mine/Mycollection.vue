<template>
	<div>
		<Info :names="info"></Info>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				info:"您还没有收藏任何商品。您可以先 随便逛逛"
			}
		},
		methods: {
		},
		components:{
			Info: () => import("./Info.vue")
		}
		
	}
</script>

<style>
</style>
