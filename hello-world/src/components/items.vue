<template>
	<div>
		<ul>
			<li v-for="name in filterNames" :key="name">{{ name }}</li>
		</ul>
		<input type="text" v-model="search">
	</div>
</template>

<script>
import itemsm from '../mixin/items'
export default {
	mixins: [itemsm]
}
</script>

<style>
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		list-style-type: none;
		padding-right:10px;
		display: inline-block;
	}
</style>