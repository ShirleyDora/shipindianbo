<template>
	<view style="line-height: 1;overflow-y:hidden;">
		<!-- 视频 -->
		<!-- #ifndef APP-PLUS -->
		<video :src="src" :poster="poster" style="height: 225px;width:100%;" id="myVideo" controls></video>
		<!-- #endif -->
		<!-- scrollview -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
			<!-- 选项卡头部 -->
			<view class="border-bottom border-light-secondary bg-white flex align-stretch position-fixed left-0 right-0" style="height:80rpx;z-index:100;">
				<view class="flex-1 flex align-center justify-center"
				v-for="(item,index) in tabBars" :key="index"
				@click="changeTab(index)">
					<text class="font py-1"
					:class="tabIndex === index ?'text-main border-main':''"
					:style="tabIndex === index ?'border-bottom: 5rpx solid;':''">{{item.name}}</text>
				</view>
			</view>
			<view class="" style="height: 80rpx;"></view>
			<!-- 选项卡内容 -->
			<!-- 简介 -->
			<view v-if="tabIndex === 0" class="animate__animated animate__fadeIn animate__fast">
				<!-- 头像昵称 -->
				<view class="px-3 py-2 flex align-center">
					<image :src="detail.user.avatar || '/static/demo/6.jpg'" mode="" style="width: 80rpx;height: 80rpx;" class="mr-3 rounded-circle"
					@click="openUserSpace"></image>
					<view class="flex flex-column">
						<text class="text-main font-md">{{detail.user.nickname|| detail.user.username}}</text>
						<text class="font-sm text-muted" style="line-height: 1;">{{fensCount}} 粉丝</text>
					</view>
					<!-- 关注按钮 -->
					<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2 ml-auto" hover-class="bg-main-hover"
					@click="doFollow" v-if=" detail.user.id !== user_id ">
						<text class="font">{{followStatus ? '已关注':'关注'}}</text>
					</view>
				</view>
				<!-- 视频标题 -->
				<view class="font-md px-3">
					{{detail.title}}
				</view>
				<!-- 视频描述 -->
				<view class="flex align-center justify-between text-muted px-3">
					<view class="flex align-center">
						<text class="iconfont iconbofangshu font-md mr-1"></text>
						<text class="font-sm">{{detail.play_count}}</text>
						<text class="iconfont icondanmushu font-md mx-1"></text>
						<text class="font-sm">{{detail.danmu_count}}</text>
						<text class="font-sm ml-1">{{detail.created_time }}</text>
					</view>
					<!-- 收藏按钮 -->
					<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2 ml-auto" hover-class="bg-main-hover"
					@click="doFava">
						<text class="font-sm">{{favaStatus ? '已收藏':'收藏'}}</text>
					</view>
				</view>
				<!-- 滚动选集 -->
				<view class="py-3 border-top border-bottom border-light-secondary">
					<!-- 选集标题 -->
					<view class="flex align-center px-3">
						<text class="font-md">选集</text>
						<view class="flex align-center text-muted ml-auto"
						@click="openPopup">
							共{{videos.length}}集
							<text class="iconfont iconjinru ml-1"></text>
						</view>
					</view>
					<!-- 选集内容 -->
					<scroll-view scroll-x="true" class="scroll-row mt-2" style="height:200rpx;">
						<view v-for="(item,index) in videos" :key="index" class="scroll-row-item rounded border ml-2 p-2 " style="width: 340rpx;"
						:class="activeIndex === index ? 'text-main border-main':'text-muted border-light-secondary'"
						@click="changeVideo(item,index)">
							<text class="font">第 {{index+1}} 集</text>
							<view class="font-md text-ellipsis">
								{{item.title}}
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 热门 -->
				<view class="f-list">
					<media-list v-for="(item,index) in hot" :key="index" :item="item" :index="index"></media-list>
				</view>
			</view>
			<!-- 评论 -->
			<view v-else class="animate__animated animate__fadeIn animate__fast px-3 py-1">
				<view class="uni-comment-list"
				v-for="(item,index) in comments" :key="index">
					<view class="uni-comment-face">
						<image :src="item.send_user.avatar || '/static/demo/6.jpg'" mode="" style="width: 80rpx;height: 80rpx;" class="rounded-circle"></image>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text class="text-main font">{{item.send_user.nickname || item.send_user.username}}</text>
						</view>
						<view class="uni-comment-date">
							<text class="text-muted font-sm">{{item.created_time | formatTime}}</text>
						</view>
						<view class="uni-comment-content"
						@click="openComment(item.id,item.send_user)">
							{{item.content}}
						</view>
						<!-- 回复内容 -->
						<view class="flex flex-wrap p-2 bg-light rounded"
						v-for="(item2,index2) in item.comments" :key="index2">
							<text class="font text-main">{{item2.send_user.nickname || item2.send_user.username}}</text>
							<text class="font text-dark">回复</text>
							<text class="font text-main pr-1">{{item2.reply_user.nickname || item2.reply_user.username}}:</text>
							<text @click="openComment(item.id,item2.send_user)">{{item2.content}}</text>
						</view>
					</view>
				</view>
				<!-- 右下角+号 -->
				<view class="position-fixed flex align-center justify-center bg-main rounded-circle animate__animated animate__fast" hover-class="bg-main-hover animate__pulse" style="width: 120rpx;height: 120rpx;right: 50rpx;bottom: 50rpx;"
				@click="openComment(0)">
					<text class="text-white iconfont iconjia"></text>
				</view>
			</view>
		</scroll-view>
		<!-- 选集弹出框 -->
		<f-popup ref="popup">
			<view class="position-absolute bottom-0 left-0 right-0 bg-white animate__animated animate__faster animate__fadeIn"
			@click.stop="stop">
				<view style="height: 600rpx;">
					<view class="flex align-center">
						<text class="font-md ml-3">选集</text>
						<view class="flex align-center justify-center ml-auto" style="width: 80rpx;height: 80rpx;" hover-class="bg-light"
						@click="hidePopup">
							<text class="iconfont iconguanbi text-muted"></text>
						</view>
					</view>
					<!-- 选集列表 -->
					<scroll-view scroll-y="true" style="height: 520rpx;">
						<view class="flex flex-wrap">
							<view style="width: 50%;box-sizing: border-box;" class="p-2" 
							v-for="(item,index) in videos" :key="index" >
								<view class="rounded border p-2 "
								:class="activeIndex === index ? 'text-main border-main':'text-muted border-light-secondary'"
								@click="changeVideo(item,index)">
									<text class="font">第 {{index+1}} 集</text>
									<view class="font-md text-ellipsis">
										{{item.title}}
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</f-popup>   
		<!-- 评论弹出框 -->
		<f-popup ref="comment">
			<view class="position-absolute bottom-0 left-0 right-0 bg-white animate__animated animate__faster animate__fadeIn"
			@click.stop="stop">
				<view class="flex align-center px-3" style="height: 100rpx;">
					<input type="text" v-model="content" :placeholder="reply_user.id ? '回复@'+reply_user.name:'说一句话吧'" class="bg-light rounded mr-3 px-2 flex-1" style="height: 60rpx;" />
					<!-- 回复按钮 -->
					<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2 ml-auto" hover-class="bg-main-hover"
					@click="sendComment">
						<text class="font">发送</text>
					</view>
				</view>
			</view>
		</f-popup>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import fPopup from '@/components/common/f-popup.vue';
	import $T from '@/common/time.js';
	import {mapState } from 'vuex';
	let videoCTX = null;
	export default {
		components:{
			mediaList,
			fPopup
		},
		data() {
			return {
				id:0,
				hot:[],
				comments:[],
				content:"",
				reply_id:0,
				reply_user:{
					id:0,
					name:"",
				},
				fensCount:0,
				src:"",
				poster:"",
				detail:{
					category_id: 0,
					cover: "",
					created_time: "",
					danmu_count: 0,
					desc: "",
					duration: 0,
					id: 0,
					play_count: 0,
					title: "",
					user: {
						id: 0, 
						username: "", 
						nickname: "", 
						avatar: "",
					}
				},
				activeIndex:0,
				videos:[],
				scrollH:500,
				tabIndex:0,
				tabBars:[{
					name:"简介"
				},{
					name:"评论"
				}],
				followStatus:false,
				favaStatus:false,
			}
		},
		onLoad(e){
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - 226;
			if(!e.id){
				uni.showToast({
					title:'非法参数'
				});
				return uni.navigateBack({
					delta:1
				});
			}
			this.id = e.id;
			this.$H.get('/video_read/'+this.id,{
				token:true,
				noJump:true,
				toast:false,
			}).then(result=>{
				//console.log(result);
				this.hot = result.hot;
				this.detail = result.video;
				this.detail.created_time = $T.gettime(this.detail.created_time);
				this.poster = this.detail.cover;
				this.videos = result.video.video_details || [];
				this.src = this.videos[this.activeIndex] ? this.videos[this.activeIndex].url : "";
				this.followStatus = result.follow;
				this.favaStatus = result.fava;
				this.getComments();
				this.getUserInfo();
				uni.$emit('video',{
					event:"init",
					params:{
						videos:this.videos,
						activeIndex:this.activeIndex,
						poster:this.detail.cover,
					}
				})
			})
		},
		mounted(){
			videoCTX = uni.createVideoContext('myVideo',this);
		},
		computed:{
			...mapState({
				user_id:state=>{
					return state.user ? state.user.id : 0;
				}
			})
		},
		methods: {
			//获取粉丝数
			getUserInfo(){
				this.$H.get('/user/user_info?user_id='+this.detail.user.id).then(res=>{
					this.fensCount = res.fensCount
				})
			},
			//获取评论数据
			getComments(){
				this.$H.get('/video_comment/'+this.detail.id).then(res=>{
					this.comments = res;
				})
			},
			// 提交评论内容
			sendComment(){
				if(this.content === ''){
					return uni.showToast({
						title: '评论内容不能为空',
						icon: 'none'
					});
				}
				this.$H.post('/comment',{
					content:this.content,
					video_id:this.detail.id,
					reply_id:this.reply_id,
					reply_user_id:this.reply_user.id
				}).then(res=>{
					this.getComments()
					uni.showToast({
						title: '评论成功',
						icon: 'none'
					});
					this.$refs.comment.hide()
				})
			},
			//切换选项卡
			changeTab(index){
				this.tabIndex = index;
			},
			//弹出选集
			openPopup(){
				this.$refs.popup.show();
			},
			hidePopup(){
				this.$refs.popup.hide();
			},
			stop(){
				
			},
			//+号弹出评论框
			openComment(reply_id=0,reply_user={
				id:0,
				username:"",
				nickname:"",
			}){
				this.reply_id = reply_id;
				this.reply_user = {
					id:reply_user.id,
					name:reply_user.nickname || reply_user.username,
				};
				this.content = "";
				this.$refs.comment.show();
			},
			//关注/取消关注
			doFollow(){
				let url = this.followStatus ? '/user/unfollow':'/user/follow'
				let msg = this.followStatus ? '取消关注':'关注'
				this.$H.post(url,{
					follow_id:this.detail.user.id
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
			//收藏/取消收藏
			doFava(){
				this.$H.post('/fava/video',{
					video_id:this.detail.id
				},{
					token:true
				}).then(res=>{
					this.favaStatus = res.status;
					uni.showToast({
						title:res.msg
					})
				})
			},
			//选集切换
			changeVideo(item,index){
				videoCTX.pause();
				this.activeIndex = index;
				this.src = item.url;
				// #ifndef APP-PLUS
				setTimeout(()=>{
					videoCTX.play();
				},300)
				// #endif
				// #ifdef APP-PLUS
				uni.$emit('video',{
					event:"change",
					params:{
						activeIndex:this.activeIndex
					}
				})
				// #endif
			},
			//跳转个人空间
			openUserSpace(){
				uni.navigateTo({
					url:'../user-space/user-space?user_id='+this.detail.user.id,
				})
			}
		},
		filters:{
			formatTime(value){
				return $T.gettime(value);
			}
		}
	}
</script>

<style>

</style>
