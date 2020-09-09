<template>
	<view>
		<!-- 封面上传 -->
		<view class="bg-light position-relative" hover-class="bg-hover-light" style="height:350rpx;"
		@click="upload">
			<image v-if="form.cover" :src="form.cover" style="width: 750rpx;height: 350rpx;" mode="aspectFill"></image>
			<view class="position-absolute left-0 right-0 bottom-0 top-0 flex flex-column align-center justify-center" style="background-color: rgba(255,255,255,0.2);">
				<text v-if="!form.cover" class="iconfont iconjia" style="font-size: 50rpx;"></text>
				<text class="font text-muted">点击{{form.cover?'切换':'添加'}}封面图</text>
			</view>
		</view>
		<!-- 上传说明 -->
		<form-item label="标题">
			<input type="text" v-model="form.title" placeholder="请填写视频标题" placeholder-class="text-light-muted" class="w-100 pr-5" />
		</form-item>
		<picker mode="selector" :range="range" @change="changeSelector">
			<form-item label="分类" rightIcon>
				<input type="text" v-model="categoryTitle" placeholder="请填写视频分类" placeholder-class="text-light-muted" class="w-100 pr-5" disabled />
			</form-item>
		</picker>
		<form-item label="描述">
			<textarea v-model="form.desc" placeholder="请填写视频描述" style="width:550rpx;" class="py-3" />
		</form-item>
		<!-- 小程序端发布按钮 -->
		<!-- #ifdef MP -->
			<view class="py-2 px-3">
				<main-big-button @click="submit">发布</main-big-button>
			</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import formItem from '@/components/common/form-item.vue';
	import mainBigButton from '@/components/common/main-big-button.vue';
	export default {
		components:{
			formItem,
			mainBigButton
		},
		data() {
			return {
				id:0,
				form:{
					cover:"",
					title:"",
					category_id:0,
					desc:""
				},
				category:[],
				range:["分类1","分类2","分类3"]
			}
		},
		onLoad(e){
			if(e.data){
				let item = JSON.parse(decodeURIComponent(e.data));
				this.form = {
					cover:item.cover,
					title:item.title,
					category_id:item.category_id,
					desc:item.desc,
				}
				this.id = item.id;
			}
			this.$H.get("/category").then(res=>{
				this.category = res;
				this.range = res.map(item=>item.title)
			})
		},
		onNavigationBarButtonTap(){
			this.submit();
		},
		computed:{
			categoryTitle(){
				let index = this.category.findIndex(item=>item.id === this.form.category_id);
				if(index === -1){
					return ''
				}
				return this.category[index].title;
			}
		},
		methods: {
			upload(){
				uni.chooseImage({
					count:1,
					sizeType:['compressed'],
					sourceType:['album'],
					success:(res)=>{
						// this.form.cover =res.tempFilePaths[0];
						this.$H.upload('/upload',{
							filePath:res.tempFilePaths[0]
						}).then(res=>{
							this.form.cover = res.url;
							uni.showToast({
								title: '上传成功'
							});
						}).catch(err=>{
							uni.showToast({
								title: '上传失败'
							});
						})
					}
				})
			},
			changeSelector(e){
				this.form.category_id = this.category[e.detail.value].id;
			},
			submit(){
				let url = this.id === 0?'/video':'/video/'+this.id;//判断是发布还是修改
				let msg = this.id === 0?'发布':'修改'
				this.$H.post(url,this.form,{
					token:true
				}).then(res=>{
					uni.showToast({
						title: msg+'成功'
					});
					uni.navigateBack({
						delta:1
					})
				})
			}
		}
	}
</script>

<style>

</style>
