<template>
	<div class="goodTitle">
		<el-row>
			<el-col :span="3">
				<el-checkbox  @change="checkall" :checked="check"><span>全选</span></el-checkbox>
			</el-col>
			<el-col :span="9"><span>商品名称</span></el-col>
			<el-col :span="2"><span>单价</span></el-col>
			<el-col :span="5"><span>数量</span></el-col>
			<el-col :span="2"><span>小计</span></el-col>
			<el-col :span="3"><span>操作</span></el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isIndeterminate: false,
				check:true,
				color: "#D70057"

			}
		},
		methods:{
			checkall() {
				console.log(this.check, 123)
				this.check = !this.check;
				let goodsArr = this.$store.state.vuexC.cartGoods;
				this.$store.commit('vuexC/checkAll', {check: this.check})
			},
		}
	}
</script>

<style>
	.goodTitle {
		width: 100%;
		background-color: #FFFFFF;
	}
	.el-checkbox {
		background-color: #FFFFFF;
	}
	.goodTitle span {
		display: inline-block;
		height: 20px;
		line-height: 20px;
	}
	.el-col,span {
		background-color: #FFFFFF;
	}
	.goodTitle .el-col {
		text-align: center;
		line-height: 80px;
	}

	.checkbox {
		width: 20px;
		height: 40px;
		font-weight: lighter;
	}

	.el-checkbox__inner {
		width: 20px;
		height: 20px;
	}

	.el-checkbox__inner::after {
		width: 6px;
		height: 14px;
		left: 6px;
		position: absolute;
		top: 1px;
	}

	.el-checkbox__label {
		font-size: 18px;
		color: #333333;
	}

	.el-checkbox__input.is-checked+.el-checkbox__label {
		color: #D70057;
	}

	.el-checkbox__input.is-checked .el-checkbox__inner,
	.el-checkbox__input.is-indeterminate .el-checkbox__inner {
		background-color: #D70057;
		border-color: #D70057;
	}
</style>
