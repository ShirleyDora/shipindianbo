<template>
	<view>
		<!-- 头部标题 -->
		<view class="flex align-center py-2 px-3">
			<text class="font-md font-weight-bold">{{title}}</text>
		</view>
		<slot></slot>
		<!-- 换一批底部标题 -->
		<view class="flex align-center justify-center py-2 text-main" hover-class="text-main-hover"
		v-if="showRefresh" @click="$emit('refresh')">
			<text class="iconfont iconshuaxin"></text>
			换一批
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:String,
			showRefresh:{
				type:Boolean,
				default:true
			}
		}
	}
</script>

<style>
</style>
