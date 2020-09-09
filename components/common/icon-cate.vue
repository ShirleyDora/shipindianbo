<template>
	<view class="icon-cate align-center justify-center flex-column" @click="openList">
		<image :src="item.cover" style="width: 70rpx;height:70rpx;" class="bg-light" mode="aspectFill"></image>
		<text class="text-muted font mt-1">{{item.title}}</text>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:[Number,String]
		},
		methods:{
			openList(){
				uni.navigateTo({
					url: '../../pages/list/list?id='+this.item.id + '&title=' +this.item.title,
				});
			}
		}
	}
</script>

<style>
	.icon-cate{
		width:187.5rpx;
		height:187.5rpx;
		line-height: 1;
		display:inline-flex!important;
	}
</style>
