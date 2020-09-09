<template>
	<view>
		<!-- 底部背景图 -->
		<image src="/static/demo/list2/01.jpg" mode="aspectFill" style="width: 750rpx;height: 320rpx;"></image>
		<view style="height: 350rpx;" class="border-bottom">
			<!-- 头像 -->
			<view class="flex align-center justify-between px-3">
				<image :src="user.avatar||'/static/demo/6.jpg'" mode="widthFix" class="rounded-circle" style="width: 130rpx;height: 130rpx; margin-top:-60rpx;"></image>
				<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2" hover-class="bg-main-hover"
				@click="doFollow" v-if=" user_id != my_user_id ">
					<text class="font">{{ followStatus ? '已关注':'关注' }}</text>
				</view>
			</view>
			<!-- 个人描述 -->
			<view class="px-4 flex align-center py-1">
				<view class="font-lg text-main font-weight-bold">{{user.nickname ||user.username}}</view>
				<text class="font text-light-muted ml-2">UID:{{user.id}}</text>
			</view>
			<!-- <view class="flex align-center px-4">
				<view class="rounded font-sm bg-main text-white px-1">年度大会员</view>
			</view> -->
			<!-- 关注与粉丝数 -->
			<view class="flex align-center px-4 mt-2">
				<view class="font-md text-dark flex align-center">
					{{followCount}}
					<text class="ml-2 font-sm text-light-muted">关注</text>
				</view>
				<view class="font-md text-dark flex align-center ml-2">
					{{fensCount}}
					<text class="ml-2 font-sm text-light-muted">粉丝</text>
				</view>
			</view>
			<view class="px-4 mt-2">
				<view class="text-ellipsis font-sm text-light-muted" style="line-height: 1.5;">{{user.desc || '暂无描述'}}</view>
			</view>
		</view>
		<!-- 选项卡 -->
		<view class="flex align-center" style="height: 80rpx;">
			<view class="flex-1 flex align-center justify-center"
			v-for="(item,index) in tabBars" :key="index" @click="changeTab(index)">
				<text class="font" :class="tabIndex === index ?'text-main':''">{{item.name}}</text>
			</view>
		</view>
		<!-- scrollview组件 -->
		<swiper :current="tabIndex" :duration="300" :style="'height:'+scrollHeight+'px'" @change="changeSwiper">
			<swiper-item v-for="(tab,tabI) in tabBars" :key="tabI">
				<scroll-view scroll-y="true" style="height: 100vh;" :style="'height:'+scrollHeight+'px'"
				@scrolltolower="scrolltolower(tabI)">
					<view class="f-divider"></view>
					<media-list v-for="(item,index) in list[tabI].data" :key="index" :item="item" :index="index"></media-list>
					<!-- 默认提示 -->
					<view class="flex align-center justify-center text-secondary" style="height: 200rpx;"
					v-if="list[tabI].length === 0">暂无数据</view>
					<!-- 上拉加载更多 -->
					<view class="flex align-center justify-center font-md text-secondary" style="height:80rpx;" hover-class="bg-light"
					v-else-if="list[tabI].length > 10">
						{{ tab.loadText }}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import {mapState } from 'vuex';
	export default {
		components:{
			mediaList
		},
		data() {
			return {
				user_id:0,
				fensCount: 0,
				followStatus: false,
				followCount: 0,
				user:{
					avatar: "",
					desc: "",
					email: "",
					id: 0,
					nickname: "",
					phone: "",
					sex: "未知",
					username: "",
				},
				tabIndex:0,
				tabBars:[{
					key:"video_list",
					name:"作品",
					page:1,
					loadText:"上拉加载更多",
				},{
					key:"fava_list",
					name:"收藏",
					page:1,
					loadText:"上拉加载更多",
				}],
				scrollHeight:0,
				list:[{
					data:[],
				},{
					data:[],
				}]
			}
		},
		created(){
			let res = uni.getSystemInfoSync();
			this.scrollHeight = res.windowHeight - 88 - res.statusBarHeight;
		},
		onLoad(e){
			if(!e.user_id){
				uni.showToast({
					title:'非法参数'
				});
				return uni.navigateBack({
					delta:1
				});
			}
			this.user_id = e.user_id;
			this.getUserInfo(e.user_id);
			this.getData();
		},
		computed:{
			tab(){
				return this.tabBars[this.tabIndex];
			},
			url(){
				let t = this.tab;
				return `/${t.key}/${t.page}?user_id=${this.user_id}`;
			},
			...mapState({
				my_user_id:state=>{
					return state.user ? state.user.id : 0;
				}
			}),
		},
		methods: {
			//关注/取消关注
			doFollow(){
				let url = this.followStatus ? '/user/unfollow':'/user/follow'
				let msg = this.followStatus ? '取消关注':'关注'
				this.$H.post(url,{
					follow_id:this.user_id
				},{
					token:true
				}).then(res=>{
					this.followStatus = !this.followStatus
					uni.showToast({
						title:msg+'成功'
					})
				}).catch(err=>{
					uni.showToast({
						title:msg+'失败'
					})
				})
			},
			//上拉加载更多
			scrolltolower(tabI){
				this.tabBars[index].page++;
				this.getData();
			},
			//得到用户数据
			getUserInfo(user_id){
				this.$H.get('/user/user_info?user_id='+user_id,{
					token:true,
					noJump:true,
					toast:false,
				}).then(res=>{
					this.user = res.user;
					this.fensCount = res.fensCount;
					this.followStatus = res.follow;
					this.followCount = res.followCount;
				})
			},
			//得到关注收藏数据
			getData(){
				let index = this.tabIndex;
				let page = this.tabBars[index].page;
				this.$H.get(this.url).then(res=>{
					this.list[index].data = page === 1 ? res:[...this.list[index].data,...res];
					this.tabBars[index].loadText = res.length === 10 ? '上拉加载更多' :'没有更多了';
				}).catch(err=>{
					if(page > 1){
						this.tabBars[index].page--;
					}
					this.tabBars[index].loadText = '上拉加载更多';
				})
			},
			changeTab(index){
				this.tabIndex = index;
			},
			changeSwiper(e){
				this.tabIndex = e.detail.current;
				this.tabBars[this.tabIndex].page =1;
				this.getData();
			}
		}
	}
</script>

<style>

</style>
