<template>
	<view>
		<media-list v-for="(item,index) in list" :key="index" :item="item" :index="index"></media-list>
		<!-- 默认提示 -->
		<view class="flex align-center justify-center text-secondary" style="height: 200rpx;"
		v-if="list.length === 0">暂无数据</view>
		<!-- 上拉加载更多 -->
		<view class="flex align-center justify-center font-md text-secondary" style="height:80rpx;" hover-class="bg-light"
		v-else-if="list.length > 10">
			{{ loadText }}
		</view>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	export default {
		components:{
			mediaList
		},
		data() {
			return {
				category_id:0,
				list:[],
				page:1,
				loadText:"上拉加载更多"
			}
		},
		onLoad(e){
			if(e.id){
				this.category_id = e.id;
			}
			if(e.title){
				uni.setNavigationBarTitle({
					title:e.title
				})
			}
			//获取数据
			this.getData();
		},
		onPullDownRefresh(){
			this.page = 1;
			this.getData().then(res=>{
				uni.stopPullDownRefresh();
				uni.showToast({
					title: '刷新成功'
				});
			}).catch(err=>{
				uni.stopPullDownRefresh();
				uni.showToast({
					title: '刷新失败'
				});
			});
		},
		onReachBottom(){
			if(this.loadText === '正在加载中...'){
				return
			}
			this.loadText === '正在加载中...'
			this.page = this.page +1;
			this.getData();
		},
		methods: {
			getData(){
				let url = `/category/${this.category_id}/video/${this.page}`;
				let page = this.page;
				return this.$H.get(url).then(res=>{
					if(page === 1){
						this.list = res;
					}else{
						this.list = [...this.list,...res];
					}
					this.loadText = res.length === 10 ? '上拉加载更多':'没有更多了'
					this.list = res;
				}).catch(err=>{
					if(this.page >1){
						this.page--;
					}
					this.loadText === '上拉加载更多'
				})
			}
		}
	}
</script>

<style>

</style>
