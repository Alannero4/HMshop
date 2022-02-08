<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000" :circular="true">
			<swiper-item v-for="img,index in swiperList" :key='index'>
				<image :src="img.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text>商店</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>图片</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>视频</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>关于我们</text>
			</view>
		</view>
		<!--推荐商品区 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				swiperList:[]
			}
		},
		onLoad(){
			this.getBannerImg()
		},
		methods:{
			// 获取轮播图数据
			async getBannerImg(){
				/* uni.request({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
					success:res=> {
						console.log(res)
						if(res.data.meta.status == 200){
							this.swiperList = res.data.message
						}else{
							
						}
					}
				}) */
				const res = await this.$myReq({
					url:'/public/v1/home/swiperdata'
				})
				console.log(res)
				this.swiperList = res.data.message
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			display:flex;
			.nav_item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background-color: #d81e06;
					margin: 10px auto;
					border-radius: 60rpx;
					line-height: 120rpx;
					color: white;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods{
			background: #eee;
			.tit{
				height: 55rpx;
				line-height: 55rpx;
				text-align: center;
			}
		}
	}
</style>
