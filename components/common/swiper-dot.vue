<template>
	<view class="position-relative">
		<!-- 轮播图 -->
		<slot></slot>
		<!-- 轮播图底部 -->
		<view class="flex align-center position-absolute left-0 right-0 bottom-0 text-white rounded-bottom-lg px-2" style="height: 70rpx; background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8));">
			<!-- 轮播图文字说明 -->
			<view style="width: 80%;" class="text-ellipsis">
				{{info[current] ? info[current].title : '暂无描述'}}
			</view>
			<!-- 轮播图圆点 -->
			<view style="width: 20%;" class="flex align-center justify-end flex-shrink">
				<view v-for="(item,index) in info" :key="index" class="rounded-circle ml-1" style="width: 16rpx;height: 16rpx;"
				:style="index === current ? 'background-color: rgba(255,255,255,1);':'background-color: rgba(255,255,255,0.5);'"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			info:Array,
			current:{
				type:Number,
				default:0
			}
		}
	}
</script>

<style>
</style>
