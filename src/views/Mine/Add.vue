<template>
	<div class="infoBox">
		<div class="user-box">
			<b></b>
			<span>{{addinfo}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ["addinfo"],
	}
</script>

<style scoped="scoped">
	* {
		width: 100%;
		background-color: #FFFFFF;
	}

	.user-box {
		width: 400px;
		height: 60px;
		border: 1px solid #e8e8e8;
		text-align: center;
		cursor: pointer;
		color: #999;
		font-family: 'Microsoft Yahei';
		font-size: 14px;
		font-weight: bold;
		margin: 20px 30px;
	}

	.user-box b {
		display: inline-block;
		padding-right: 10px;
		width: 30px;
		height: 60px;
		vertical-align: middle;
		line-height: 60px;
		background: url(http://0.js.al.okbuycdn.com/resources/images/v6/usercenter/u-address.png) -8px 5px no-repeat;
		color: #fff;
	}
	.user-box:hover {
	    color: #666;
	    border: 1px solid #b0b0b0;
	}
	.user-box:hover b {
	    background: url(http://0.js.al.okbuycdn.com/resources/images/v6/usercenter/u-address.png) -8px -97px no-repeat;
	}
</style>
