<template>
	<div class="cinema_body">
		<ul>
			<li>
				<div>
					<span>大地影院（澳东世纪店）</span>
					<span class="q"><span class="price">22.9</span>元起</span>
				</div>
				<div class="address">
					<span>金州区大连经济开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
			<li>
				<div>
					<span>大地影院（澳东世纪店）</span>
					<span class="q"><span class="price">22.9</span>元起</span>
				</div>
				<div class="address">
					<span>金州区大连经济开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
			<li>
				<div>
					<span>大地影院（澳东世纪店）</span>
					<span class="q"><span class="price">22.9</span>元起</span>
				</div>
				<div class="address">
					<span>金州区大连经济开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
			<li>
				<div>
					<span>大地影院（澳东世纪店）</span>
					<span class="q"><span class="price">22.9</span>元起</span>
				</div>
				<div class="address">
					<span>金州区大连经济开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
			<li>
				<div>
					<span>大地影院（澳东世纪店）</span>
					<span class="q"><span class="price">22.9</span>元起</span>
				</div>
				<div class="address">
					<span>金州区大连经济开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'CinemaList'
	}
</script>

<style scoped="scoped">
#content .cinema_body{flex: 1;overflow: auto;}
.cinema_body ul{padding: 20px;}
.cinema_body li{border-bottom: 1px solid #E6E6E6; margin-bottom: 20px;}
.cinema_body div{margin-bottom: 10px;}
.cinema_body .q{font-size: 11px;color: #F03D37;}
.cinema_body .price{font-size: 18px;}
.cinema_body .address{font-size: 13px; color: #666666;}
.cinema_body .address span:nth-of-type(2){float: right;}
.cinema_body .card{display: flex;}
.cinema_body .card div{padding: 0 3px;height: 15px;line-height: 15px;border-radius: 2px;color: #f90;border: 1px solid #FF9900;font-size: 13px;margin-right: ;}
.cinema_body .card div.or{color: #f90;border: 1px solid #FF9900;}
.cinema_body .card div.bl{color: #589def;border: 1px solid #589def;}

</style>



















