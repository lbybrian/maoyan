<template>
	<footer id="footer">
		<ul>
			<!--<router-link tag='li' to='/movie' class="active" >-->
			<router-link tag='li' to='/movie' >
				<i class="iconfont icondianying"></i>
				<p>电影</p>
			</router-link>
			<router-link tag='li' to='/cinema'>
				<i class="iconfont iconyingyuan"></i>
				<p>影院</p>
			</router-link>
			<router-link tag='li' to='/mine'>
				<i class="iconfont iconwode1"></i>
				<p>我的</p>
			</router-link>
		</ul>
	</footer>
</template>

<script>
//	export default{
//		name:'TabBar'
//	}
</script>

<style scoped="scoped">
	#footer{
		width: 100%;
		height: 50px;
		background: white;
		border-top: 2px #ebe8e3 solid;
		flex: 0;
		position: fixed;
		bottom: 0;
	}
	#footer ul{
		display: flex;
		text-align: center;
		height: 50px;
		align-items: center;
	}
	#footer ul li{
		flex: 1;
		height: 40px;
	}
	/*#footer ul li.active{
		color: #f03d37;
	}*/
	#footer ul li.router-link-exact-active{
		color: #F03D37;
	}
	#footer ul i{
		font-size: 20px;
	}
	#footer ul p{
		font-size: 12px;
		line-height: 18px;
	}
</style>