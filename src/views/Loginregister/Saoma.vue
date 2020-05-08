<template>
	<div class="box">
		<div class="imgbox">
			<img src="http://www.okbuy.com/loginqrcode/qrcode?action=login&id=f8b528963444d4196f4e2524c8cb9a53" />
		</div>
		<div class="xiazai">
			<p class="p1">请使用好乐买APP扫码登陆</p>
			<div class="xx">
				<p class="el-icon-download sp"></p><p class="p2">下载好乐买APP</p>
				<img src="http://www.okbuy.com/loginqrcode/qrcode?action=login&id=f8b528963444d4196f4e2524c8cb9a53" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.box .imgbox{
		margin-top: 30px;
		width: 100%;
		height: 247px;
		background-color: #FFFFFF;
	}
	.box .imgbox img{
		position: relative;
		left: 50%;
		margin-left: -123px;
	}
	.box .xiazai .p1{
		width: 200px;
		background-color: #FFFFFF;
	}
	.box .xiazai{
		width: 200px;
		background-color: #FFFFFF;
		position: absolute;
		top: 350px;
		left: 96px;
		z-index: 1000;
	}
	.box .xiazai .p2{
		width: 120px;
		background-color: #FFFFFF;
		text-align: center;
		display: inline-block;
		margin-left: 20px;
	}
	.box .xiazai .sp{
		margin-left: 20px;
		background-color: #FFFFFF;
		color: #D70057;
	}
	.box .xiazai img{
		height: 100px;
		width: 100px;
		margin-left: 50px;
		display: none;
	}
	.box .xiazai .xx{
		background-color: #FFFFFF;
	}
	.box .xiazai .xx:hover{
		cursor:pointer;
	}
	.box .xiazai .xx:hover img{
		display: block;
	}
</style>
