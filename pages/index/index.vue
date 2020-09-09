<template>
	<view>
		<!-- #ifdef MP -->
			<!-- 小程序端导航栏 -->
			<view class="flex align-center fixed-top bg-white" style="height: 44px;">
				<!-- 搜索框 -->
				<view @click="openSearch" class="flex align-center flex-1 rounded-circle ml-2 px-1" style="background-color: #F6F7F8; color:#959FA0;">
					<text class="iconfont iconsousuokuang"></text>
					<text>音乐MV专辑：繁华梦</text>
				</view>
				<view @click="openCate" class="flex align-center px-2" style="color:#959FA0;">分类</view>
			</view>
			<view style="height:44px;"></view>
		<!-- #endif -->
		<!-- 轮播图组件 -->
		<view class="px-3 py-2">
			<swiper-dot :info="swipers" :current="current">
				<!-- 轮播图 -->
				<swiper :current="current" circular :autoplay="true" :interval="3000" :duration="150" style="height: 250rpx;" @change="changeSwiper">
					<swiper-item v-for="(item,index) in swipers" :key="index" @click="openDetailVideo(item.video_id)">
						<image :src="item.cover" mode="aspectFill" style="height: 250rpx;width: 100%;" class="rounded-lg"></image>
					</swiper-item>	
				</swiper>
			</swiper-dot>
		</view>
		<!-- 卡片组件 -->
		<card title="为你推荐">
			<!-- 列表组件1 -->
			<view class="f-list">
				<view v-for="(item,index) in list" :key="index"  @click="openDetailVideo(item.id)" style="margin-left:15rpx;margin-right: 15rpx; min-height: 5rpx;width: 328rpx;" class="rounded-lg border position-relative mb-2">
					<!-- 播放图片 -->
					<image :src="item.cover" style="width:100%;height:220rpx;" mode="aspectFill" class="rounded-top-lg"></image>
					<!-- 播放量 -->
					<view style="height: 65rpx; top:155rpx; background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8));" class="flex align-center text-white position-absolute left-0 right-0">
						<text class="iconfont iconbofangshu font-md mx-1"></text>
						<text class="font-sm">{{item.play_count}}</text>
						<text class="iconfont icondanmushu font-md mx-1"></text>
						<text class="font-sm">{{item.danmu_count}}</text>
					</view>
					<!-- 底部说明 -->
					<view class="px-1 pb-1">
						<!-- 标题 -->
						<view class="font">
							{{item.title}}
						</view>
						<!-- 分类 -->
						<view class="flex align-center justify-between text-light-muted">
							<text class="font">{{item.category.title}}</text>
							<text class="iconfont icongengduo"></text>
						</view>
					</view>
				</view>
			</view>
		</card>
		<view class="f-divider"></view>
		<card title="为你推荐">
			<!-- 列表组件2 -->
			<view class="f-list">
				<view v-for="(item,index) in list" :key="index" @click="openDetailVideo(item.id)" style="margin-left:15rpx;margin-right: 15rpx; min-height: 5rpx;width: 210rpx;" class="rounded-lg position-relative mb-2 rounded-lg">
					<!-- 播放图片 -->
					<image :src="item.cover" style="width:100%;height:280rpx;" mode="aspectFill" class="rounded-lg"></image>
					<!-- 播放量 -->
					<view style="height: 65rpx; top:215rpx; background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8));" class="flex align-center text-white position-absolute left-0 right-0">
						<text class="iconfont iconbofangshu font-md mx-1"></text>
						<text class="font-sm">{{item.play_count}}</text>
						
					</view>
					<!-- 标题 -->
					<view class="font">{{item.title}}</view>
				</view>
			</view>
		</card>
		<view class="f-divider"></view>
		<card title="为你推荐">
			<!-- 列表组件3 -->
				<view class="f-list">
					<media-list v-for="(item,index) in list" :key="index" :item="item" :index="index"></media-list>
				</view>
		</card>
		</view>
</template>

<script>
	import swiperDot from '@/components/common/swiper-dot.vue';
	import card from '@/components/common/card.vue';
	import mediaList from '@/components/common/media-list.vue';
	export default {
		components:{
			swiperDot,
			card,
			mediaList
		},
		data() {
			return {
				current:0,
				swipers:[],
				list:[]
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
			});
		},
		onNavigationBarButtonTap(e) {
			uni.switchTab({
				url:"../cate/cate"
			})
		},
		onLoad(){
			this.$H.get('/index_data').then(res=>{
				this.list = res;
			})
			this.$H.get('/banner/list').then(res=>{
				this.swipers = res;
			})
		},
		methods: {
			//兼容小程序
			openSearch(){
				uni.navigateTo({
					url:"../search/search"
				})
			},
			openCate(){
				uni.switchTab({
					url:'../cate/cate'
				})
			},
			changeSwiper(e){
				this.current = e.detail.current;
			},
			openDetailVideo(id){
				uni.navigateTo({
					url: '../detail-video/detail-video?id='+id,
				});
			}
		}
	}
</script>

<style>
	.f-list{
		display:flex;
		flex-wrap: wrap;
		padding-left: 15rpx;
		padding-right: 15rpx;
	}
</style>
