<template>
	<div class="newsbox">
		<span @click="del">-</span>
		<span class="count">{{this.$store.state.vuexC.cartGoods[index].count}}</span>
		<span @click="add">+</span>
	</div>
</template>

<script>
	export default {
		props: ["index"],
		data() {
			return {
				
			}
		},
		methods: {
			add() {
				this.$store.state.vuexC.cartGoods[this.index].count++;
			},
			del() {
				this.$store.state.vuexC.cartGoods[this.index].count--;
				if (this.$store.state.vuexC.cartGoods[this.index].count <= 0) {
					this.$store.state.vuexC.cartGoods[this.index].count = 0
				}
			}
		}
		
	}
</script>

<style>
	.newsbox {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		margin-top: 32px;
		background-color: #FFFFFF;
	}
	.count {
		width: 70px;
		border-top: 1px solid #E8E8E8;
		border-bottom: 1px solid #E8E8E8;
	}
	.newsbox span:not(:nth-child(2)){
		cursor: pointer;
	}
	.newsbox span  {
		width: 50px;
		height: 40px!important;
		font-weight: bold;
		line-height: 40px!important;
		border: 1px solid #E8E8E8;
	}
</style>
