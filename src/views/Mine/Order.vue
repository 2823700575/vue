<template>
	<div class="orderBox" >
		<span v-for="(item,index) in serve" :key="index">{{item}}</span>
	</div>
</template>

<script>
	export default {
		data() {  
			return {
				// show:this.$store.state.vuexC.serveItem[1]
			}
		},
		props:["serve"],
	}
</script>

<style scoped="scoped">
	*{
		background-color: #FFFFFF;
	}
	.orderBox {
		padding: 40px 30px;
		width: 800px;
		height: 30px;
	    line-height: 32px;
	    font-family: 'Microsoft Yahei';
	    font-size: 14px;
	    color: #666;
	}
	span {
		width: 60px;
		text-align: left;
		height: 100%;
	}
	span::after {
		content: "|";
		margin: 0 20px;
	}
	span:last-child::after {
		content: "";
	}
	.orderBox {
	    text-align: left;
	}
</style>
