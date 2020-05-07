<template>
	<div class="mineBox">
		<el-container>
			<el-aside class="aside">
				<Aside @myevent="getSideInfo"></Aside>
			</el-aside>
			<el-container class="content">
				<el-main>
					<MainContent :sidedata="sideinfo"></MainContent>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {sideinfo:"我的订单"}
		},
		methods:{
			getSideInfo(value) {
				this.sideinfo=value
				console.log(this.sideinfo,88888)
			},
		},
		name: 'Mine',
		components: {
			Aside: () => import("./Aside.vue"),
			MainContent: () => import("./MainContent.vue")
		},
		

	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	.mineBox {
		width: 1200px;
		margin: 30px auto;
	}
	.el-aside {
		background-color: #FFFFFF;
		color: #333;
		text-align: center;
	}

	.el-main {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		color: #333;
		text-align: center;
	}

	.aside {
		width: 220px !important;
	}

	.content {
		width: 950px;
		margin-left: 20px;
	}
</style>
