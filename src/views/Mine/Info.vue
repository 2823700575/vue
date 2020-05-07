<template>
	<div class="infoBox" >
		<div class="user-box">
			<b></b>
			<span>{{names}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["names"],
	}
</script>

<style scoped="scoped">
	*{
		width: 100%;
		background-color: #FFFFFF;
	}
	.user-box {
	    border: 1px solid #e8e8e8;
		background-color: #FFFFFF;
		line-height: 100px;
		margin-left: 30px;
		width: 860px;
	    height: 100px;
	   text-align: center;
	}
	.user-box b {
	    display: inline-block;
	    width: 50px;
	    height: 50px;
		vertical-align: middle;
	    margin-right: 10px;
	    background: url(http://0.js.al.okbuycdn.com/resources/images/v6/usercenter/ucenter-icon1.png) -149px -133px no-repeat;
	}
</style>
