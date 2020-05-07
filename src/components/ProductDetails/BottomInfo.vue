<template>
	<div class="mybottom">
		<div class="buttom_div">
			<div class="button_icon">
				<div>
					<img src="http://0.js.al.okbuycdn.com/resources/images/v6/common/code_client.png" alt="">
					<div class="button_icon_word">好乐买手机客户端</div>
				</div>
				<div>
					<img src="http://0.js.al.okbuycdn.com/resources/images/v6/common/code_public.jpg" alt="">
					<div class="button_icon_word">好乐买微信公众号</div>
				</div>
			</div>
			<div>
				<ul class="abm">
					<li>
						<p class="tit">购物指南</p>
						<p><a href="http://www.okbuy.com/info/help/5" rel="nofollow">购物流程</a></p>
						<p><a href="http://www.okbuy.com/info/help/5" rel="nofollow">订购方式</a></p>
						<p><a href="http://www.okbuy.com/info/help/21" rel="nofollow">常见问题</a></p>
						<p><a href="http://www.okbuy.com/info/help/141" rel="nofollow">隐私政策</a></p>
					</li>
					<li>
						<p class="tit">配送方式</p>
						<p><a href="http://www.okbuy.com/info/help/16" rel="nofollow">快递配送</a></p>
						<p><a href="http://www.okbuy.com/info/help/16" rel="nofollow">配送时间</a></p>
						<!-- <p><a href="http://www.okbuy.com/info/help/17" rel="nofollow">验货查收</a></p> -->
					</li>
					<li>
						<p class="tit">支付方式</p>
						<p><a href="http://www.okbuy.com/info/help/9" rel="nofollow">支付方式</a></p>
						<p><a href="http://www.okbuy.com/info/help/10" rel="nofollow">代金券</a></p>
						<!-- <p><a href="/area" rel="nofollow">可货到付款范围</a></p> -->
					</li>
					<li>
						<p class="tit">售后服务 </p>
						<p><a href="http://www.okbuy.com/info/help/23" rel="nofollow">退换货规约</a></p>
						<p><a href="http://www.okbuy.com/info/help/24" rel="nofollow">退款说明</a></p>
						<p><a href="http://www.okbuy.com/info/help/22" rel="nofollow">联系客服</a></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style >
	.mybottom{
		border-bottom:2px solid #333333;
		border-top:2px solid #333333;
		margin-top: 20px;
	}
	.buttom_div{
		height: 200px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.button_icon{
		height: 120px;
		width: 300px;
		background-color: white;
		display: flex;
		justify-content: space-around;
		text-align: center;
		background-color: white;
	}
	.button_icon div img{
		height: 90px;
		width: 90px;
	}
	.button_icon div .button_icon_word{
		font-size: 14px;
	}
	.abm li {
    float: left;
    width: 120px;
    display: inline;
    border-left: solid 1px #fff;
    margin-right: 30px;
	}
	.abm li .tit{
		background-color: white;
	}
	.abm p a{
		font-size: 12px;
		text-decoration: none;
		color: #666666;
	}
</style>
