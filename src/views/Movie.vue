<template>
	<div id="main">
		<Header title="喵喵电影" />
		<!--Movie-->
		<div id="content">
			<div class="movie_menu">
				<router-link tag="div" to="/movie/city" class="city_name">
					<span>大连</span><i class="iconfont iconpull_down"></i>
				</router-link>
				<div class="hot_switch">
					<router-link tag="div" to="/movie/nowPlaying" class="hot_item ">正在热映</router-link>
					<router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
				</div>
				<router-link tag="div" to="/movie/search" class="search_entry">
					<i class="iconfont iconsousuo"></i>
				</router-link>
			</div>
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
		<TabBar />
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	//import NowPlaying from '@/components/NowPlaying';

	export default {
		name: 'Movie',
		components: {
			Header,
			TabBar,
			//		NowPlaying
		}
	}
</script>
<style scoped="scoped">
	#content .movie_menu {
		/*top: 0;
		left: 0;
		margin-top: 50px;*/
		width: 100%;
		height: 45px;
		position: fixed;
		border-bottom: 1px solid #e6e6e6;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		z-index: 10;
	}
	
	.movie_menu .city_name {
		margin-left: 20px;
		height: 100%;
		line-height: 45px;
	}
	
	.movie_menu .city_name.active {
		color: #ef4238;
		border-bottom: 2px #EF4238 solid;
	}
	
	.movie_menu .city_name.router-link-exact-active {
		color: #ef4238;
		border-bottom: 2px #EF4238 solid;
	}
	
	.movie_menu .hot_switch {
		display: flex;
		height: 100%;
		line-height: 45px;
	}
	
	.movie_menu .hot_item {
		font-size: 15px;
		color: #666666;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700;
	}
	
	.movie_menu .hot_item.active {
		color: #EF4238;
		border-bottom: 2px solid #EF4238;
	}
	
	.movie_menu .hot_item.router-link-exact-active {
		color: #EF4238;
		border-bottom: 2px solid #EF4238;
	}
	
	.movie_menu .search_entry {
		margin-right: 20px;
		height: 100%;
		line-height: 45px;
	}
	
	.movie_menu .search_entry.active {
		color: #EF4238;
		border-bottom: 2px #EF4238 solid;
	}
	
	.movie_menu .search_entry.router-link-exact-active {
		color: #EF4238;
		border-bottom: 2px #EF4238 solid;
	}
	
	.movie_menu .search_entry i {
		font-size: 24px;
		color: red;
	}
	.slide-enter-active {
		animation: 13s detailMove;
	}
	
	@keyframes detailMove {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>