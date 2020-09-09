<template>
	<view>
		<view class="bg-light" style="min-height: 100vh;">
			<block v-for="(item,index) in list" :key="index">
				<!-- 视频播放 -->
				<view class="bg-white"
				v-if="!item.isedit">
					<video style="height: 350rpx; width:100%;" :src="item.video" controls></video>
					<form-item label="标题">
						<text class="font">{{item.title}}</text>
					</form-item>
					<view class="flex" style="height: 100rpx;">
						<view class="flex-1 font-md flex align-center justify-center" hover-class="bg-light"
						@click="openEdit(item)">修改</view>
						<view class="flex-1 font-md flex align-center justify-center" hover-class="bg-light"
						@click="deleteItem(item)">删除</view>
					</view>
				</view>
				<view class="bg-white"
				v-else>
					<!-- 封面上传 -->
					<view class="bg-light position-relative" hover-class="bg-hover-light" style="height:350rpx;">
						<video style="height: 350rpx; width:100%;" :src="item.video" controls
						v-if="item.video"></video>
						<view class="position-absolute left-0 right-0 bottom-0 top-0 flex flex-column align-center justify-center" style="background-color: rgba(255,255,255,0.2);"
						v-if="!item.video" @click="upload(item)">
							<text class="iconfont iconjia" style="font-size: 50rpx;"></text>
							<text class="font text-muted">点击添加视频</text>
						</view>
					</view>
					<!-- 上传说明 -->
					<view class="flex align-center justify-center font border-bottom border-top" hover-class="bg-light" style="height: 100rpx;"
					v-if="item.video" @click="upload(item)">
						点击切换视频
					</view>
					<form-item label="标题">
						<input type="text" v-model="item.title" placeholder="请填写视频标题" placeholder-class="text-light-muted" class="w-100 pr-5" />
					</form-item>
					<form-item label="描述">
						<textarea v-model="item.desc" placeholder="请填写视频描述" style="width:550rpx;" class="py-3" />
					</form-item>
					<view class="flex" style="height: 100rpx;">
						<view class="flex-1 font-md flex align-center justify-center bg-main text-white" hover-class="bg-main-hover"
						@click="submit(item)">完成</view>
						<view class="flex-1 font-md flex align-center justify-center" hover-class="bg-light"
						@click="deleteItems(index)">删除</view>
					</view>
				</view>
				<view class="f-divider"></view>
			</block>
			<view class="flex justify-center align-center bg-main text-white font" hover-class="bg-main-hover" style="height: 100rpx;"
			@click="addItem" v-if="showButton">
				+ 添加新章节
			</view>
		</view>
	</view>
</template>

<script>
	import formItem from '@/components/common/form-item.vue';
	export default {
		components:{
			formItem
		},
		data() {
			return {
				id:0,
				list:[]
			}
		},
		computed:{
			showButton(){
				let arr = this.list.filter(item=>{
					return item.isedit
				});
				return arr.length === 0;
			}
		},
		onLoad(e){
			if(!e.id){
				uni.navigateBack({
					delta:1
				});
				return uni.showToast({
					title:'非法操作'
				})
			}
			this.id = e.id;
			this.getData();
		},
		methods: {
			getData(){
				this.$H.get('/video_detail/'+this.id).then(res=>{
					this.list = res.map(item=>{
						item.isedit = false;
						item.video = item.url;
						return item;
					});
				})
			},
			//完成
			submit(item){
				if(!item.video){
					return uni.showToast({
						title: '视频不能为空'
					});
				}
				if(!item.title){
					return uni.showToast({
						title: '标题不能为空'
					});
				}
				let url = item.id ? '/video_detail/'+item.id : '/video_detail';//判断是创建还是修改
				let msg = item.id ? '修改' : '创建';
				this.$H.post(url,{
					title:item.title,
					url:item.video,
					video_id:this.id,
					desc:item.desc
				},{ 
					token:true ,
				}).then(res=>{
					item.isedit = false
					uni.showToast({
						title: msg + '成功'
					});
					this.getData()
				}).catch(err=>{
					uni.showToast({
						title: msg + '失败'
					});
				})
			},
			//创建后的删除，写入数据库后需要删除
			deleteItem(item){
				uni.showModal({
					content: '是否要删除该视频？',
					success: (res) => {
						if(res.confirm){
							this.$H.post('/video_detail/destroy',{
								id:item.id
							},{
								token:true
							}).then(res=>{
								this.getData()
								uni.showToast({
									title:'删除成功'
								})
							})
						}
					}
				});
			},
			//创建时的删除，未写入数据库前
			deleteItems(index){
				uni.showModal({
					content: '是否删除该视频？',
					success: (res) => {
						if(res.confirm){
							this.list.splice(index,1);
						}
					}
				});
			},
			//添加章节
			addItem(){
				this.list.push({
					video:"",
					title:"",
					desc:"",
					isedit:true
				})
			},
			//上传视频
			upload(item){
				uni.chooseVideo({
					count:1,
					sourceType:['camera','album'],
					success:(res)=>{
						// item.video = res.tempFilePath;
						this.$H.upload('/upload',{
							filePath:res.tempFilePath
						}).then(res=>{
							item.video = res.url;
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
			//开启编辑状态
			openEdit(item){
				item.isedit = true;
			}
		}
	}
</script>

<style>

</style>
