<template>
	<view>
		<!-- 自定义导航栏 -->
		<view :style="'height:'+statusBarHeight+'px;'"></view>
		<view class="flex align-center" style="height:44px;"
		@click="back">
			<view class="flex align-center justify-center animate__animated animate__fast" style="width: 44px;height: 44px;" hover-class="text-main animate__pulse">
				<text class="iconfont iconguanbi font-lg"></text>
			</view>
		</view>
		<!-- 欢迎回来 -->
		<view class="flex align-center justify-center font-lg text-muted" style="margin-top:100rpx; margin-bottom:80rpx;">
			欢迎回来
		</view>
		<!-- Input框 -->
		<view class="px-4">
			<!-- 登录功能 -->
			<input type="text" v-model="form.username" class="uni-input bg-light rounded mb-4" placeholder="手机号/用户名/邮箱" />
			<input type="text" v-model="form.password" class="uni-input bg-light rounded mb-4" placeholder="请输入密码" />
			<!-- 注册功能 -->
			<input type="text" v-model="form.repassword" class="uni-input bg-light rounded mb-4" placeholder="请输入确认密码"
			v-if="type === 'reg'"/>
		</view>
		<!-- 提交框 -->
		<view class="px-4">
			<main-big-button @click="submit">{{type === 'login' ?'登录':'注册'}}</main-big-button>
		</view>
		<!-- 第三方登录 -->
		<!-- 社交账号登录 -->
		<view class="flex align-center justify-center py-5">
			<view style="height: 1rpx; width:100rpx;background-color: #E3E1DD;"></view>
			<view class="text-muted mx-2 font-sm">
				社交账号登录
			</view>
			<view style="height: 1rpx; width:100rpx;background-color: #E3E1DD;"></view>
		</view>
		<!-- 图标 -->
		<view class="flex align-center px-5">
			<!-- 微信 -->
			<view class="flex align-center justify-center flex-1">
				<view class="rounded-circle flex align-center justify-center bg-light" style="width: 100rpx;height: 100rpx;">
					<text class="iconfont iconweixin"></text>
				</view>
			</view>
			<!-- QQ -->
			<view class="flex align-center justify-center flex-1">
				<view class="rounded-circle flex align-center justify-center bg-light" style="width: 100rpx;height: 100rpx;">
					<text class="iconfont iconQQ"></text>
				</view>
			</view>
			<!-- 微博 -->
			<view class="flex align-center justify-center flex-1">
				<view class="rounded-circle flex align-center justify-center bg-light" style="width: 100rpx;height: 100rpx;">
					<text class="iconfont iconxinlangweibo"></text>
				</view>
			</view>
		</view>
		<!-- 注册 -->
		<view class="flex align-center justify-center py-5">
			<view class="text-muted mx-2 font-sm" @click="changeType">{{type === 'login' ?'注册账号':'去登陆'}}</view>
		</view>
	</view>
</template>

<script>
	import mainBigButton from '@/components/common/main-big-button.vue';
	export default {
		components:{
			mainBigButton
		},
		data() {
			return {
				type:"login",
				statusBarHeight:0,
				form:{
					username:"",
					password:"",
					repassword:""
				}
			}
		},
		onLoad(){
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		},
		methods: {
			changeType(){
				this.type = this.type === 'login' ? 'reg':'login';
				this.form={
					username:"",
					password:"",
					repassword:""
				};
			},
			back(){
				uni.navigateBack({
					delta:1
				});
			},
			submit(){
				let msg = this.type === 'reg' ? '注册':'登录';
				this.$H.post('/'+this.type,this.form).then(res=>{
					if(this.type === 'reg'){
						this.changeType();
					}else{
						this.$store.dispatch('login',res);
						uni.navigateBack({
							delta:1
						})
					}
					uni.showToast({
						title: msg+'成功'
					});
				})
			}
		}
	}
</script>

<style>

</style>
