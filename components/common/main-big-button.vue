<template>
	<view @click="$emit('click')" class="py-3 rounded-circle bg-main flex align-center justify-center font text-white" hover-class="bg-main-hover">
		<slot></slot>
	</view>
</template>

<script>
</script>

<style>
</style>
