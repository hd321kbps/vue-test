<template>
	<div>
		<h1>Пицца</h1>
		<div v-for="(product, i) in Products" :key="i">
			<p>{{ product.title }}</p>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		Products() {
			return this.$store.getters.products
		}
	}
}
</script>

<style>

</style>